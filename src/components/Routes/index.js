import React from 'react'; 
import {BrowserRouter, Switch, Route } from 'react-router-dom'; 

import PaginaInicial from '../PaginaInicial'; 
import PaginaDrawing from '../PaginaDrawing'; 
import PaginaArtistic from '../PaginaArtistic'; 
import PaginaSculpture from '../PaginaSculpture';


export default function Routes(){
    return(
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component = {PaginaInicial}/>
            <Route  path='/drawing' component = {PaginaDrawing}/>
            <Route path='/sculpture' component = {PaginaArtistic}/>
            <Route  path='/artistic' component = {PaginaSculpture}/>  
        </Switch>
    
     </BrowserRouter>
    )
}