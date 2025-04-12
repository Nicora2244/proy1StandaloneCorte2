import { Component, Input, OnInit } from '@angular/core';
import { IonButton, IonButtons,IonIcon,IonTitle,IonToolbar} from '@ionic/angular/standalone';

import SwiperCore from 'swiper';
import 'swiper/css';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { arrowBack,arrowForward } from 'ionicons/icons';
import { addIcons } from 'ionicons';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y,Autoplay]);


@Component({
  selector: 'app-swiper-slides',
  templateUrl: './swiper-slides.component.html',
  styleUrls: ['./swiper-slides.component.scss'],
  imports:[
      IonTitle,
      IonButton,
      IonButtons,
      IonToolbar,
      IonIcon,
       
    ]
})
export class SwiperSlidesComponent  implements OnInit {
  swiper?: SwiperCore;
  

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

  /*
  images= [
    "https://i.pinimg.com/736x/f0/6c/01/f06c01e461fd3b1bab79335bbbfba7ca.jpg",
    "https://i.pinimg.com/474x/2e/1b/2f/2e1b2f6077763f0bb5c398e376f7e619.jpg",
    "https://i.pinimg.com/originals/54/b3/b0/54b3b0f33801af7e4df419fcc0007e2d.jpg"
  ];
  */
  
  
  @Input() images!:any[];
  @Input() titulo:string = 'Imagenes';
  

  
  constructor() { 
    addIcons({ arrowBack,arrowForward });
  }

  ngOnInit() {


    this.swiper = new SwiperCore('.swiper-container', {
      loop: true,              // Enable looping
      slidesPerView: 2,        // Show 3 slides at once
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


    
  }

  goNext(){
    this.swiper?.slideNext();
  }

  goPrev(){
    this.swiper?.slidePrev();
  }

}
