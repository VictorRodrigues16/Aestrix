import "../styles/Sneakers.scss"
import tenis1 from  "../assets/tenis1.svg"
import tenis2 from  "../assets/tenis2.svg"
import tenis3 from  "../assets/tenis3.svg"
import tenis4 from  "../assets/tenis4.svg"
import tenis5 from  "../assets/tenis5.svg"
import tenis6 from  "../assets/tenis6.svg"
import tenis7 from  "../assets/tenis7.svg"
import tenis8 from  "../assets/tenis8.svg"


export default function Sneakers() {

    return (
      <>
        <section id="products">
            <div id="tittle-product">
                <h1>CONHEÇA NOSSOS PRODUTOS</h1>
            </div>
            
            <div id="all-boxes">
                <div id="box1">
                    <div className="box">
                        <div id="img-box">
                            <img src={tenis1} alt="tenis1" />
                        </div>
                        <h1>Tênis Puma Deviate Nitro 2 Psychedelic Rush Feminino - Preto</h1>
                        <h2>R$ 1.499,90<br /><span>até 10x de R$ 149,99 sem juros</span></h2>
                        
                    </div>

                    <div className="box">
                        <div id="img-box">
                            <img src={tenis2} alt="tenis2" />
                        </div>
                        <h1>Tênis New Balance Fresh Foam X 1080 V13 Masculino - Preto</h1>
                        <h2>R$ 1.199,99<br /> <span>até 10x de R$ 120,00 sem juros</span></h2>
                        
                    </div>

                    <div className="box">
                        <div id="img-box">
                            <img src={tenis3} alt="tenis3" />
                        </div>
                        <h1>Tênis Asics Gel-Cumulus 26 Feminino - Verde</h1>
                        <h2>R$ 899,99 <br /><span>até 10x de R$ 90,00 sem juros</span></h2>
                        
                    </div>

                    <div className="box">
                        <div id="img-box">
                            <img src={tenis4} alt="tenis4" />
                        </div>
                        <h1>Tênis Olympikus Citrus 2 Feminino - Cinza+Salmão</h1>
                        <h2>R$ 179,99 <br /><span>até 2x de R$ 90,00 sem juros</span></h2>
                        
                    </div>
                    
                </div>

                <div id="box2">
                    <div className="box">
                        <div id="img-box">
                            <img src={tenis5} alt="tenis5" />
                        </div>
                        <h1>Tênis Adidas Coreracer Masculino - Preto+Branco</h1>
                        <h2>R$ 249,99<br /><span>até 2x de R$ 125,00 sem juros</span></h2>
                        
                    </div>

                    <div className="box">
                        <div id="img-box">
                            <img src={tenis6} alt="tenis6" />
                        </div>
                        <h1>Tênis Adidas Coreracer Masculino - Azul+Marinho</h1>
                        <h2>R$ 249,99<br /><span>até 2x de R$ 125,00 sem juros</span></h2>
                        
                    </div>

                    <div className="box">
                        <div id="img-box">
                            <img src={tenis7} alt="tenis7" />
                        </div>
                        <h1>Tênis Adidas Runfalcon 3.0 Feminino - Branco+dourado</h1>
                        <h2>R$ 399,99<br /><span>até 5x de R$ 80,00 sem juros</span></h2>
                        
                    </div>

                    <div className="box">
                        <div id="img-box">
                            <img src={tenis8} alt="tenis8" />
                        </div>
                        <h1>Tênis Fila Racer Carbon 2 Feminino - Laranja+Azul</h1>
                        <h2>R$ 1.099,99<br /> <span>até 10x de R$ 110,00 sem juros</span></h2>
                        
                    </div>
                    
                </div>
                
            </div>

        </section>
      </>
    )
  }
  