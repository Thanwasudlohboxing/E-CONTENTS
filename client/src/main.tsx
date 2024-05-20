import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import LoginForm from './component/login/login.tsx'
// Component Admin
import { HomeAdmin } from './component/Admin/Home/HomeAdmin.tsx'
import { DataTable } from './component/Admin/DataTable/Datatable.tsx'
// Component User
import { HomePageUser } from './component/User/HomeUser.tsx'
import { FormUser } from './component/User/FormUser.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginForm />
  },
  {
    path: "/HomeAdmin",
    element: <HomeAdmin />
  },
  {
    path: "/Datatable",
    element: <DataTable />
  },
  {
    path: "/HomeUser",
    element: <HomePageUser />
  },
  {
    path: "/FormUser",
    element: <FormUser />
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
