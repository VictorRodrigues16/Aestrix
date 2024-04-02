import {} from 'react'
import Footer from "./components/Footer"
import Nav from "./components/Nav"
import { Outlet } from 'react-router-dom'
import Sneakers from './routes/Sneakers'

function App() {

  return (
    <>
      <Nav/>
      <Sneakers/>
      <Footer/>
    </>
  )
}

export default App
