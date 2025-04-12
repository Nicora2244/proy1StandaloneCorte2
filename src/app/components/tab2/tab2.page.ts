import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,
  //IonButton, IonItem, IonLabel, IonList, IonListHeader,IonAvatar,
  IonInfiniteScroll, IonInfiniteScrollContent, IonList } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { RickymortyServiceService } from 'src/app/services/rickymorty-service.service';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
//import { NgFor, NgIf } from '@angular/common';
import { PersonajeListComponent } from '../elements/personaje-list/personaje-list.component';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  
  imports: [ 
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    ExploreContainerComponent,
    IonInfiniteScroll, 
    IonInfiniteScrollContent,

    //Lista de Personajes
    PersonajeListComponent
  ],
    standalone: true
})
export class Tab2Page {

  personajes: any;
  url_next: string = '';

  //Estas son las variables de titulo y subtitulo que voy a pasar
  titulo1: string = 'Personajes';
  subtitulo1: string = 'Ricky & Morty';

  completado:boolean = false;


  constructor(private bd: RickymortyServiceService) {}

  ngOnInit() {
    //Aqui realizo la carga real de los personajes, despues que toda la pagina
    //ha sido cargada 
    this.cargarPersonajes();
  }


  //El metodo que va a cargar los personajes
  async cargarPersonajes() {
    //this.cargando = true;
    await this.bd
      .getAllPersonajes()
      .toPromise()
      .then((resp: any) => {
        //Aqui se realiza la asignacion de los personajes de la respuesta
        this.personajes = resp.results;

        console.log("MISPERSONAJES", this.personajes);

        this.url_next = resp.info.next;
        console.log("SIGUIENTE", this.url_next);

      });
  }

  async cargarPersonajesSiguientes() {
    //this.cargando = true;
    await this.bd
      .getMasPersonajes(this.url_next)
      .toPromise()
      .then((resp: any) => {
        //Aqui se realiza la asignacion de los personajes de la respuesta
        let masPersonajes = resp.results;

        this.personajes.push(...masPersonajes);

        /*
        for(let i=0;i< masPersonajes.length;i++){
          let unPersonaje = masPersonajes[i];
          this.personajes.push(unPersonaje)
        }
        */

        this.url_next = resp.info.next;
        console.log("SIGUIENTE", this.url_next);

      });
  }

  onIonInfinite(ev: InfiniteScrollCustomEvent) {
    //console.log(this.url_next);

    if (this.url_next !== null) {
      this.cargarPersonajesSiguientes()

      setTimeout(() => {
        ev.target.complete();
        //(ev as InfiniteScrollCustomEvent).target.complete();
      }, 3000);
        
    }
    else{
      this.completado = true;

      setTimeout(() => {
        ev.target.complete();
        //(ev as InfiniteScrollCustomEvent).target.complete();
      }, 0);

    }


  }
  


}
