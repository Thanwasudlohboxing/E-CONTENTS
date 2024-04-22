import './login.css'
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", password);

      axios({
        url: '/api/login',
        method: "POST",
        data: formData
      }).then((response) => {
        // const response = await axios.post(, { email, password })

        if (response.data.status)
        {
          // login success
          const token = response.data.token;
          localStorage.setItem('token', token)

          return Swal.fire({
            title: 'เข้าสู่ระบบเสร็จสิ้น!',
            text: 'กดตกลงเพื่อเข้าสู่ระบบ',
            icon: 'success',
            confirmButtonText: 'ตกลง'
          }).then(function(){
            navigate("/Home");
          })
          
          
        }
        else
        {
          return Swal.fire({
            title: 'เข้าสู่ระบบไม่สำเร็จ!',
            text: 'โปรดตรวจสอบอีเมลล์ หรือ รหัสผ่าน',
            icon: 'error',
            confirmButtonText: 'ตกลง'
          })
        }

      }).catch((err) => {
        return console.error(err);
      });
    }catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    <div className="hero min-h-screen bg-base-200">
    <div className='<div class="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">'>
      <form onSubmit={handleSubmit} className='card-body'>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              เข้าสู่ระบบ
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                อีเมลล์
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  placeholder="Email"
                  className="input input-bordered w-full"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <br />
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  รหัสผ่าน
                </label>
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered w-full"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <br />
            <div>
              <button
                type="submit"
                className="btn btn-success btn-block"
              >
                เข้าสู่ระบบ
              </button>
            </div>
          </div>
        </div>
      </form>
      </div>
      </div>
    </>
  )
}

export default LoginForm

  


