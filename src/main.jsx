import React from 'react'
import ReactDOM from 'react-dom/client'
import Cadastro from './Cadastro.jsx'
import './index.css'
import Home from './home.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Catalogo from './Catalogo.jsx'

const router = createBrowserRouter([
  {
    path: "/cadastro",
    element: <Cadastro />,
  },  {
    path: "/catalogo",
    element: <Catalogo />,
    }, {
  path: "/",
  element: <Home />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
