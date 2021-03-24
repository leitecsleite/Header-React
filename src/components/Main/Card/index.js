import React from 'react';
import './style.css';



export default function card (props){
    return(
        <div className ="box-card">
            <div className ="box-conteudo">
                <div className ="img"><img src={props.imagem} /></div>
            </div> 
        </div>
    )
}