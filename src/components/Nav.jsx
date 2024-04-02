import '../styles/Nav.scss'
import { Link } from 'react-router-dom'
import logo from "../assets/logo-nav.svg"
import storeCart from '../assets/store-cart-icon.svg'

import Sobre from '../routes/Sobre'

export default function Nav() {

    return (
      <>
        <header>
          <div className='nav-left-container'>
            <div className="nav-left-content">
              <img src={logo} id="logo-nav" />
            </div>
          <nav className="nav-center-content-links">
            <Link to='/'> Home </Link>
            <Link to='/sobre'>Sobre</Link>
            <Link to='/produtos'>Produtos</Link>
            <Link to='/contato'>Contato</Link>
          </nav>
          </div>
          <div className="nav-store-cart">
            <img src={storeCart} id="store-cart" />
          </div>
        </header>
      </>
    )
  }
  