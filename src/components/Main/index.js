import React from 'react'; 
import './style.css'
import Carousel from '../Carousel';


export default function Main (){
    return(
        <main>
            <div className="container-main">
                <div className ="titulo-main">
                    <div className = "titulo">Feature Painting</div>
                    <div></div>
                </div>
                

                <Carousel/>

            </div>
        </main>
    )
}