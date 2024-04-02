import LinkedIn from '../assets/LinkedIn.svg'
import Instagram from '../assets/Instagram.svg'
import Facebook from '../assets/Facebook.svg'
import Whatsapp from '../assets/Whatsapp.svg'
import Email from '../assets/Email.svg'
import Logo from '../assets/LogoAestrix.svg'
import '../styles/Footer.scss'

export default function Footer() {

    return (
      <>
        <footer id='format-footer'>
          <div id='icons'>
          <img src={LinkedIn} alt="LinkeIcon" />
          <img src={Instagram} alt="InstaIcon" />
          <img src={Facebook} alt="FaceIcon" />
          <img src={Whatsapp} alt="WhatsIcon" />
          <img src={Email} alt="EmailIcon" />
          </div>
          <div id='logo-aestrix'>
            <img src={Logo} alt="LogoIcon" />
            <h1>AESTRIX</h1>
          </div>
          <div id='rights-reserved'>
            <p>FIAP - Challenge 2023/2024</p>
            <p>design by joraysuke</p>
          </div>
        </footer>
      </>
    )
  }
  