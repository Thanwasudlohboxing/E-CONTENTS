import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// Component
import LoginForm from './component/login/login.tsx'
import { Home } from './component/Home/Home.tsx'
import { DataTable } from './component/DataTable/Datatable.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginForm />
  },
  {
    path: "/Home",
    element: <Home />
  },
  {
    path: "/Datatable",
    element: <DataTable />
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
