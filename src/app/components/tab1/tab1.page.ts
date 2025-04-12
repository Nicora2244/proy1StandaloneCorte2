import { Component, OnInit } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';

import { ExploreContainerComponent } from '../explore-container/explore-container.component';

//import SwiperCore from 'swiper';
//import 'swiper/css';

//import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { SwiperSlidesComponent } from '../elements/swiper-slides/swiper-slides.component';

//SwiperCore.use([Navigation, Pagination, Scrollbar, A11y,Autoplay]);

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    ExploreContainerComponent,

    //Para mostrar las imagenes con Swiper
    SwiperSlidesComponent   
  ],
})
export class Tab1Page {

  /*
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  */
  //swiper?: SwiperCore;
  

  /*
  = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  }); 
  */

  images= [
    "https://i.pinimg.com/736x/f0/6c/01/f06c01e461fd3b1bab79335bbbfba7ca.jpg",
    "https://i.pinimg.com/474x/2e/1b/2f/2e1b2f6077763f0bb5c398e376f7e619.jpg",
    "https://i.pinimg.com/originals/54/b3/b0/54b3b0f33801af7e4df419fcc0007e2d.jpg",
    "https://i.pinimg.com/550x/d2/0f/ab/d20fab81bece5f1c2eaf35392ad28114.jpg"
  ];

  constructor() {}

  ngOnInit() {
    
    /*
    const swiper = new SwiperCore('.swiper-container', {
      // Swiper options here
      loop: true,
      navigation: true,
      pagination: { clickable: true },
      slidesPerView: 1,
      spaceBetween: 10,
    });
    */
    
    /*
    this.swiper = new SwiperCore('.swiper-container', {
      loop: true,              // Enable looping
      slidesPerView: 1,        // Show 3 slides at once
      spaceBetween: 10,        // Space between slides in px
      navigation: true,        // Enable navigation buttons (next/prev)
      pagination: {            // Enable pagination dots
        clickable: true,
      },
      autoplay: {              // Enable autoplay
        delay: 2500,
        disableOnInteraction: false,
      },
    });
    */    
    
  }

  swiperReady(){
    //this.swiper = this.swiperRef?.nativeElement.swiper;
  }

  swiperSlideChanged(e:Event){
  }

  goNext(){
    //this.swiper?.slideNext();
  }

  goPrev(){
    //this.swiper?.slidePrev();
  }



}
