const cors = require('cors')
const express = require('express')
const mysql = require('mysql2/promise')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const bcrypt = require('bcrypt')
const fileUpload = require('express-fileupload');

const app = express()
app.use(fileUpload()); // app.use(express.json())

app.use(cors({
  credentials: true,
  origin: ['http://localhost:8888']
}))
app.use(cookieParser())

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true
}))

const port = 8000
const secret = 'mysecret'

let conn = null

const initMySQL = async () => {
  conn = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'e-content'
  })
}

app.post('/api/register', async (req, res) => {
  try{
    const { email, password } = req.body
    const passwordHash = await bcrypt.hash(password, 10)
    const userData = {
      email,
      password: passwordHash
    }
    const [results] = await conn.query('INSERT INTO user SET ?', userData)
    res.json({
      mesage: 'insert ok',
      results
    })
  }catch (error) {
    console.log('error:', error)
  }
})

app.post('/api/login', async (req, res) => {
  try{

    console.log(req.body);

    const { email, password } = req.body


    const [results] = await conn.query('SELECT * FROM user WHERE email = ?', [email])
    console.log("here => ");
    console.log(results);

    if (!!results[0])
    {
      const userData = results[0];
      const match = await bcrypt.compare(password, userData.password)
      if(!match){
        res.status(400).json({
          message: 'login fail (wrong email, password)'
        })
        return false
      }
  
      const token = jwt.sign({ email, role: "admin" }, secret, { expiresIn: '1h' })
  
      res.json({
        status: true,
        message: 'login success',
        token
      })
    }
    else
    {
      // password invalid
      res.json({
        status: false,
        message: 'email invalid',
      });
    }
  }catch (error) {
    console.log('error:', error)
    res.status(401).json({
      message: 'login fail',
      error
    })
  }
})

app.get('/api/users', async (req, res) => {
  try{
    const authHeader = req.headers['authorization']
    let authToken = ''
    if(authHeader){
      authToken = authHeader.split(' ')[1]
    }
    console.log('authToken', authToken)
    const user = jwt.verify(authToken, secret)

    const [checkResults] = await conn.query('SELECT * FROM user WHERE email = ?', user.email)

    if(!checkResults[0]){
      throw { mesage: 'user not found' }
    }

    const [results] = await conn.query('SELECT * FROM user')
    res.json({
      user: results
    })
  }catch (error) {
    console.log('error:', error)
    res.status(401).json({
      message: 'authentication fail',
      error
    })
  }
})

app.listen(port, async () => {
  await initMySQL()
  console.log('Server started at port 8000')
})