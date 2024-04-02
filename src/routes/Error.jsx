import {} from 'react'
import errorMsg from '../assets/errorMsg.svg'
import '../styles/Error.scss'

export default function Error() {

    return (
      <>
        <section id="error-page">
            <div className='format-page'>
                <img src={errorMsg} alt="errorMsg" />
                <h1>404 - PAGE NOT FOUND... PLEASE TRY AGAIN!</h1>
            </div>
        </section>
      </>
    )
  }
  