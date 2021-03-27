import React from 'react'; 
import {BrowserRouter, Swich, Route } from 'react-router-dom'; 

import PaginaInicial from '../PaginaInicial'; 
import PaginaDrawing from '../PaginaDrawing'; 
import PaginaArtistic from '../PaginaArtistic'; 
import PaginaSculpture from '../PaginaSculpture';

 const Routes = () => {
     <BrowserRouter>
        <Swich>
            <Route exact path='/' component = {PaginaInicial}/>
            <Route exact path='/' component = {PaginaDrawing}/>
            <Route exact path='/' component = {PaginaArtistic}/>
            <Route exact path='/' component = {PaginaSculpture}/>  
        </Swich>
    
     </BrowserRouter>
 }

 export default Routes; 