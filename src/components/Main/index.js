import React from 'react'; 
import './style.css'
import Card from './Card'


export default function Main (){
    return(
        <main>
            <div className="container-main">
                <div className ="titulo-main">
                    <div className = "titulo">Feature Painting</div>
                    <div></div>
                </div>
                
                <div className ="container-card">
                     <Card imagem = "assets/foto_1.jpg"/>
                     <Card imagem = "assets/foto_2.jpg"/>
                     <Card imagem=  "assets/fotos_3.jpg" />
                </div>

            </div>
        </main>
    )
}