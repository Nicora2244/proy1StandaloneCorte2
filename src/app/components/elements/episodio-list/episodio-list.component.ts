import { Component, Input, OnInit } from '@angular/core';
import { IonAccordion, IonAccordionGroup, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonItem, IonLabel, IonList, IonThumbnail } from '@ionic/angular/standalone';
import { PersonajeListComponent } from '../personaje-list/personaje-list.component';
import { Router } from '@angular/router';

import { addIcons } from 'ionicons';
import { people,images } from 'ionicons/icons';

@Component({
  selector: 'app-episodio-list',
  templateUrl: './episodio-list.component.html',
  styleUrls: ['./episodio-list.component.scss'],
  imports: [IonList, IonItem, IonLabel, IonIcon,
    //IonListHeader, IonAvatar,
    IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
    //IonText,
    IonThumbnail, IonAccordion, IonAccordionGroup,
    PersonajeListComponent,

    //Para mostrar las imagenes con Swiper
    //SwiperSlidesComponent, FotosPersonajesPipe
    ],
  standalone: true
})
export class EpisodioListComponent implements OnInit {
  @Input() episodios: any[] = [];
  @Input() titulo: string = '';
  @Input() subtitulo: string = '';

  //Estas son las variables de titulo y subtitulo que voy a pasar
  titulo1: string = 'Personajes Capitulo';
  subtitulo1: string = 'Ricky & Morty';

  constructor(private router: Router) { 
    addIcons({ people, images });
  }

  ngOnInit() { }

  verEpisodio(unIdEpisodio:number){
    console.log("Episodio",unIdEpisodio);
    this.router.navigate(['/episodio-detail',unIdEpisodio]);
  }


}
