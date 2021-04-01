import React from 'react'; 
import Header from '../Header';
import Footer from '../Footer'
import Main from '../Main/MainDrawing';


export default function PaginaDrawing(){
    return(
        <div className="PaginaInicial">
        <Header />
        <Main />
        <Footer />
     </div>
    )
}