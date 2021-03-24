import React from 'react'; 
import './style.css'; 


export default function Header(){
    return(
        <header>
            <div className ="container-header">
                <div className= "logo-header">cultured Kid</div>
                 <nav className="navbar"> 
                     <ul>
                         <li className = "link-header"><a href="#">PADING</a></li>
                         <li className = "link-header"><a href="#">DRAWING</a></li>
                         <li className = "link-header"><a href="#">SCULPTURE</a></li>
                         <li className = "link-header"><a href="#">ARTISTIC</a></li>
                     </ul>
                 </nav>
            </div>
        </header>
    )
}