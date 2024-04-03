import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Contato from './routes/Contato.jsx'
import Home from './routes/Home.jsx'
import Produtos from './routes/Produtos'
import Sobre from './routes/Sobre.jsx'
import Error from './routes/Error'

const router = createBrowserRouter ([
  {
    path:'/', element:<App />,
    errorElement:<Error />,

    children: [
      {path: '/', element: <Home />},
      {path: '/Produtos', element: <Produtos />},
      {path: '/Sobre', element: <Sobre />},
      {path: '/Contato', element: <Contato />}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
