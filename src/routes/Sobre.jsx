import '../styles/Sobre.scss'
import imagem from '../assets/img-about.svg'

export default function Sobre() {

    return (
      <>
       <section id="about">

        <aside className='left-content'>
            <div id="title-about">
                <h1>CONHEÇA A</h1>
            </div>

            <div id="name-about">
                <h1>AESTRIX</h1>
            </div>

            <div className="text1-about">
                <p>
                    Explore a <span id='bold-about'>AESTRIX</span>, 
                    onde a excelência atlética ganha vida. 
                    Com uma cuidadosa seleção, 
                    estamos aqui para superar desafios e alcançar suas metas.
                </p>
            </div>

            <div className='text2-about'>
                <p>
                Junte-se a nós para explorar 
                novos horizontes e criar 
                memórias inesquecíveis.
                </p>
            </div>
        </aside>
        

        <div id='imagem-about'>
            <img src={imagem} alt="imagem"/>
        </div>

        </section>
      </>
    )
  }
  