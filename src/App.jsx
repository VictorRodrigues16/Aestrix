import {} from 'react'
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import { Outlet } from 'react-router-dom'
import Produtos from './routes/Produtos'

function App() {

  return (
    <>
      <Nav/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
