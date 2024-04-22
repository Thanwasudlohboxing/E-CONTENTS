import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// Component
import LoginForm from './component/login/login.tsx'
import { Home } from './component/Home/Home.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginForm />
  },
  {
    path: "/Home",
    element: <Home />
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
