import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./Carrusel.css";

function Carrusel() {
    const settings = {
        dots: true, 
        infinite: true, 
        speed: 500,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000, 
        pauseOnHover: false, 
    };
    const imagenes = [
        {src:"/Img/1.jpg", alt:"juegos entre los arboles"},
        {src:"/Img/2.jpg", alt:"juegos entre los arboles"},
        {src:"/Img/3.jpg", alt:"Los baño"},
        {src:"/Img/4.jpg", alt:"Los baño"},
        {src:"/Img/5.jpg", alt:"Los baños"},
        {src:"/Img/6.jpg", alt:"Excursion en bici"},
        {src:"/Img/7.jpg", alt:"Excursion en bici"},
        {src:"/Img/8.jpg", alt:"Excursion en bici"},
        {src:"/Img/9.jpg", alt:"Excursion en bici"},
        {src:"/Img/10.jpg", alt:"Zonas verdes"},
        {src:"/Img/11.jpg", alt:"Nuestra granja"},
        {src:"/Img/12.jpg", alt:"Ruta senderismo con dificultad 2"},
        {src:"/Img/13.jpg", alt:"Zonas de juego"},
        {src:"/Img/14.jpg", alt:"Zonas de juego"},
        {src:"/Img/15.jpg", alt:"Kayacs"},
        {src:"/Img/16.jpg", alt:"Zonas de pickMe"},
        {src:"/Img/17.jpg", alt:"Zonas de picMe"},
        {src:"/Img/18.jpg", alt:"Excursion en parapente"},
        {src:"/Img/19.jpg", alt:"Pista de juegos de pelotas"},
        {src:"/Img/20.jpg", alt:"Ruta senderismo dificultad nivel 1"},
        {src:"/Img/21.jpg", alt:"Ruta senderismo dificultad nivel 3"},
        {src:"/Img/22.jpg", alt:"Ruta a caballo"}

    ]
    return (
        <div className="carrusel-container">
            <Slider {...settings}>
                {imagenes.map((image, index) => (
                    <div key ={index} className='carrusel-slide'>
                        <img src={image.src} alt={image.alt} className="carrusel-item" />
                    </div>
                ))}

        
            </Slider>
            </div>
           );
           }     
                
        export default Carrusel;
