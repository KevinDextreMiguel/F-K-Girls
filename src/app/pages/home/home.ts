import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})

export class Home implements OnInit, OnDestroy{
  images: string[] = [
    '/imgmujer/mujer_sonriendo.jpg',
    '/imgmujer/mujer_faja.jpg',
    '/imgmujer/chica_bibkini.jpg',
    '/imgmujer/mujer_brasier.jpg',
    '/imgmujer/mujer_media.jpg',
  ];

  texts: string[] = [
    `Descubre el lugar donde la comodidad, la confianza y el estilo se encuentran. 
    En nuestra tienda online encontrarás fajas moldeadoras, medias elegantes, 
    ropa interior y brasieres diseñados para realzar tu belleza natural y hacerte sentir increíble cada día.`,
    
    `Resalta tu figura con total comodidad.
    Nuestras fajas están hechas para moldear suavemente tu silueta, 
    con telas de alta calidad que te ofrecen soporte, frescura y confort.
    Porque sentirte bien contigo misma no tiene que costar más de lo necesario.`,

    `La belleza empieza desde dentro
    Descubre nuestra ropa interior diseñada para ofrecerte suavidad, 
    frescura y libertad de movimiento, sin renunciar a la calidad y el precio justo que mereces. 
    Siéntete cómoda y segura en cada momento del día.`,

    `Donde comodidad y estilo se encuentran
    Brasieres diseñados para acompañar tu día con soporte perfecto, 
    suavidad al contacto y un diseño que realza tu belleza natural. 
    Todo con la calidad que mereces y un precio justo que amarás.`,

    `Nuestras medias están pensadas para acompañarte con comodidad y resistencia, 
    sin dejar de lado la elegancia que te hace brillar en cualquier ocasión. 
    Calidad que se siente y un precio justo para que cada paso sea más seguro y encantador.`
  ];
  
  backgrounds: string[] = [
  '#f74780',     // Para la imagen 0
  '#fc6998',     // Para la imagen 1
  '#fa8fb1',     // Para la imagen 2
  '#ffc1d5',     // Para la imagen 3
  '#FA8072',     // Para la imagen 4
];

textColors: string[] = [
  '#FFDDEE', // Para #89004F → rosa muy claro que resalta
  '#000000', // Para #C33B80 → fondo fuerte, texto suave claro
  '#ffffff', // Para #FF69B4 → blanco funciona bien
  '#5A0040', // Para #FFA8D9 → fondo claro, texto oscuro y elegante
  '#ffffff', // Para #FFE0FF → fondo muy claro, texto violeta oscuro
];

  currentIndex: number = 0;
  intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 4000); // cada 4 segundos
  }

   ngOnDestroy() {
    clearInterval(this.intervalId);
  }

 nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  goToSlide(index: number) {
    this.currentIndex = index;
  }
}


