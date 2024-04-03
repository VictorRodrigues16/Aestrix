import {} from 'react'
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import { Outlet } from 'react-router-dom'
import Sobre from './routes/Sobre'


function App() {

  return (
    <>
      <Nav/>
      <Sobre/>
      <Footer/>
    </>
  )
}

export default App
