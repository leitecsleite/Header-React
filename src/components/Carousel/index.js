import React, { Component } from "react";
import Slider from "react-slick";
import './style.css'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div>
        <Slider {...settings}>

        <div className ="box-card">
            <div className ="box-conteudo">
                <div className ="img"> <img src ="assets/foto_6.jpg"/></div>
                <h1></h1>
            </div> 
        </div>
        <div className ="box-card">  
            <div className ="box-conteudo">
                <div className ="img"><img src ="assets/foto_1.jpg"/></div>
                  <h1></h1>
                 
            </div> 
        </div>
        <div className ="box-card">
            <div className ="box-conteudo">
                <div className ="img"><img src ="assets/foto_2.jpg"/></div>
                <h1></h1>
            </div> 
        </div>
        <div className ="box-card">
            <div className ="box-conteudo">
                <div className ="img"><img src ="assets/fotos_3.jpg"/></div>
                <h1></h1>
            </div> 
        </div>
        <div className ="box-card">
            <div className ="box-conteudo">
                <div className ="img"><img src ="assets/foto_4.jpg"/></div>
            </div> 
        </div>
        <div className ="box-card">
            <div className ="box-conteudo">
                <div className ="img"><img src ="assets/foto_5.jpg"/></div>
            </div> 
        </div>
        </Slider>
      </div>
    );
  }
}