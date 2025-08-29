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
    
    `Aquí descubrirás mucho más que una prenda: nuestras fajas son el abrazo perfecto para tu figura. 
    Diseñadas con telas de compresión inteligente y costuras invisibles, ofrecen soporte donde lo necesitas, 
    realzan tus curvas y se adaptan a cada movimiento sin sacrificar comodidad.`,

    `Aquí no solo encontrarás ropa interior… descubrirás una experiencia de lujo para tu piel. 
    Cada prenda ha sido creada con materiales de la más alta calidad, pensada para envolverte en suavidad, 
    realzar tu figura y brindarte una comodidad que sentirás desde el primer instante. 
    Siente la diferencia. Vive el confort. Ama tu reflejo.`,

    `Aquí comienza tu historia con el brasier perfecto. Confeccionados con encajes finos, microfibras ultrasuaves y 
    acabados de alta costura, cada brasier abraza tu figura con un ajuste impecable, realza tu silueta y 
    te acompaña con soporte durante todo el día. Cada diseño está pensado para que te sientas tan segura como femenina. 
    Siéntete cómoda, mírate radiante, vive la diferencia.`,

    `Aquí tus pasos comienzan con elegancia. Nuestras medias no son solo un accesorio: 
    son la fusión perfecta entre confort, estilo y durabilidad. 
    Diseñadas con fibras premium de última generación, ofrecen un tacto suave como la seda, 
    una resistencia sorprendente y un ajuste impecable que se adapta a ti en cada movimiento.
    Calidad que se nota. Estilo que se siente.`
  ];
  
  backgrounds: string[] = [
  '#89004F',     // Para la imagen 0
  '#C33B80',     // Para la imagen 1
  '#FF69B4',     // Para la imagen 2
  '#FFA8D9',     // Para la imagen 3
  '#FFE0FF',     // Para la imagen 4
];

textColors: string[] = [
  '#FFDDEE', // Para #89004F → rosa muy claro que resalta
  '#FFE6F1', // Para #C33B80 → fondo fuerte, texto suave claro
  '#ffffff', // Para #FF69B4 → blanco funciona bien
  '#5A0040', // Para #FFA8D9 → fondo claro, texto oscuro y elegante
  '#4D004D', // Para #FFE0FF → fondo muy claro, texto violeta oscuro
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


