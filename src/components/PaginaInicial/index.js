import React from 'react'; 
import Header from '../Header';
import Main from '../Main/MainPaginaInicial';
import Footer from '../Footer'


export default function PaginaInicial(){
    return(
        <div className="PaginaInicial">
        <Header />
        <Main />
        <Footer />
     </div>
    )
}