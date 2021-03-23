import React from 'react'; 
import './style.css'; 


export default function Header(){
    return(
        <header>
            <div className = "logo-header"> Logo </div>
                <nav>
                    <ul className = "nav-links">
                       <li><a href= "#" > HOME </a></li>
                       <li><a href= "#" > SOBRE </a></li>
                       <li><a href= "#" > NOVIDADE </a></li>
                       <li><a href= "#" > CONTATO </a></li>
                    </ul>
                </nav>
        </header>
    )
}