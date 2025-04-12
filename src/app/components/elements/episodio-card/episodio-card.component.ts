import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
  IonItem,
  IonLabel, 
  //IonTitle, 
  IonButton, 
  IonToolbar,
  IonButtons} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { cashOutline, calendarOutline, arrowBack, arrowForward, list, images,closeCircle } from 'ionicons/icons';
import { PersonajeListComponent } from '../personaje-list/personaje-list.component';
import { SwiperSlidesComponent } from '../swiper-slides/swiper-slides.component';
import { FotosPersonajesPipe } from '../../../pipes/fotos-personajes.pipe';


@Component({
  selector: 'app-episodio-card',
  templateUrl: './episodio-card.component.html',
  styleUrls: ['./episodio-card.component.scss'],
  imports: [IonButton,
    //IonTitle, 
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    //IonText,
    IonLabel,
    IonIcon,
    IonItem,
    IonToolbar,
    IonButton,
    IonButtons,

    CommonModule,
    PersonajeListComponent,
    SwiperSlidesComponent,
    FotosPersonajesPipe,
  ],
  standalone: true,
})
export class EpisodioCardComponent implements OnInit {
  @Input() episodio: any;
  //public imageBaseUrl = 'https://image.tmdb.org/t/p';

  //Estas son las variables de titulo y subtitulo que voy a pasar
  titulo1: string = 'Personajes Capitulo';
  subtitulo1: string = 'Ricky & Morty';

  images: any[] = [];

  tipoVista: string = 'lista';
  mensajeVista: string = 'Lista Personajes';

  constructor() {
    addIcons({calendarOutline,arrowBack,arrowForward,cashOutline,list, images,closeCircle});
  }

  ngOnInit() {}

  changeView(anType: any) {
    if (anType == 'lista') {
      this.tipoVista = 'lista';
      this.mensajeVista = 'Lista Personajes';
    }

    if (anType == 'imagen') {
      this.tipoVista = 'imagen';
      this.mensajeVista = 'Imagenes';
    }

    
    if (anType == 'nada') {
      this.tipoVista = 'nada';
      this.mensajeVista = 'N/A';
    }
    
  }
}
