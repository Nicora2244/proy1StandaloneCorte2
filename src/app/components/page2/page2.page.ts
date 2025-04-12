import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { RickymortyServiceService } from 'src/app/services/rickymorty-service.service';
import { PersonajeCardComponent } from '../elements/personaje-card/personaje-card.component';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.page.html',
  styleUrls: ['./page2.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton,   
    //Card de la Pelicula
    //IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonText,
    //IonLabel, IonIcon, IonItem,
    PersonajeCardComponent, CommonModule, FormsModule]

})
export class Page2Page implements OnInit {
  id!: number;
  personaje: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private bd: RickymortyServiceService) {

      this.activatedRoute.params.subscribe(params => {

      this.id = params['id'];

      console.log("IDPERSONAJE_COMP", this.id);
      
      if (this.id){
        this.cargarUnPersonaje()
      }
        



      //Datos Locales
      //this.heroe = this._heroesService.getHeroe(this.id);
      //this.cargarDataLocal()

      //Datos en BD
      //this.cargarData()

      // console.log(this.Fotos);

    });

   }

  ngOnInit() {
  }

  //El metodo que va a cargar los personajes
  async cargarUnPersonaje() {
    //this.cargando = true;
    await this.bd
      .geUnPersonaje(this.id)
      .toPromise()
      .then((resp: any) => {
        //Aqui se realiza la asignacion de los personajes de la respuesta
        this.personaje = resp;

        console.log("MIPERSONAJEPAGE", this.personaje);

      });
  }



}

