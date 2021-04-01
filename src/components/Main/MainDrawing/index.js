import React from 'react'; 
import './style.css';


export default function MainDrawing(){
    return(
        <main>
            <div className ="container-mainDrawing">
                <div className ="container-box-left">
                    lado esquerdo
                </div>

                <div className ="container-box-right">
                    lado direito
                </div>
            </div>
        </main>
    )
}