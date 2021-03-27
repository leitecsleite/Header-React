import React from 'react'; 
import './style.css'; 
import {Link} from 'react-router-dom'; 


export default function Header(){
    return(
        <header>
            <div className ="container-header">
                <div className= "logo-header">cultured Kid</div>
                 <nav className="navbar"> 
                     <ul>
                         <li className = "link-header"><Link to ='/' >PADING</Link></li>
                         <li className = "link-header"><Link to ='/drawing'> DRAWING </Link> </li>
                         <li className = "link-header"><Link to ='/sculpture'>SCULPTURE </Link ></li>
                         <li className = "link-header"><Link to ='/artistic' >ARTISTIC </Link> </li>
                     </ul>
                 </nav>
            </div>
        </header>
    )
}