import React from 'react'; 
import './style.css'; 


export default function Footer(){
    return(
        <footer>
            <div className = "footer-container">
                <div className ="footer-container-info">
                    <div className ="footer-container-info-1">
                          <div className ="footer-container-info-1-foto">
                              <img src="assets/foto_eugenia.jpg"/>
                          </div>

                          <div className ="footer-container-info-1-descricao">
                              <h1>Eugenia</h1>
                              <p>Painter, Amsterdam</p>
                          </div>    
                    </div>

                    
                    <div className ="footer-container-info-1">
                          <div className ="footer-container-info-1-foto">
                              <img src="assets/foto_rapaz.jpg"/>
                          </div>

                          <div className ="footer-container-info-1-descricao">
                              <h1>Eugenia</h1>
                              <p>Painter, Amsterdam</p>
                          </div>  

                    </div>

                   <div className ="footer-container-info-1">

                          <div className ="footer-container-info-1-foto">
                              <img src="assets/foto_moca.jpg"/>
                          </div>

                          <div className ="footer-container-info-1-descricao">
                              <h1>Eugenia</h1>
                              <p>Painter, Amsterdam</p>
                          </div>  

                   </div>
                </div>
            </div>
        </footer>
    )
}