import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonAvatar, IonItem, IonLabel, IonList, IonListHeader, IonButtons, IonIcon, IonButton } from "@ionic/angular/standalone";
import { StorageService } from 'src/app/services/storage.service';

import { heart, heartOutline} from 'ionicons/icons';
import { addIcons } from 'ionicons';


@Component({
  selector: 'app-personaje-list',
  templateUrl: './personaje-list.component.html',
  styleUrls: ['./personaje-list.component.scss'],
  imports: [IonIcon, 
    IonButtons, 
    IonButton,
    IonList, 
    IonItem, 
    IonLabel, 
    IonListHeader, 
    IonAvatar],
  standalone: true

})
export class PersonajeListComponent implements OnInit {

  @Input() personajes: any[] = [];
  @Input() titulo: string = '';
  @Input() subtitulo: string = '';
  @Input() id_episodio: string = '1';
  
  
  constructor(private router: Router,
    private storageService: StorageService) { 
      addIcons({ heart,heartOutline});

    }

  ngOnInit(
  ) {
 
  }

  verPersonaje(unIdPersonaje:number){
    console.log("PERSONAJE",unIdPersonaje);
    this.router.navigate(['/page2',unIdPersonaje]);
  }

  addFavorito(unPersonaje:any){
    console.log("ADDFavorite",unPersonaje);
    this.storageService.saveRemovePersonaje(unPersonaje);

  }

  esFavorito(unPersonaje:any):boolean{

    
    if(this.storageService.personajeInFavorites(unPersonaje)){
      return true;
    }
    else {
      return false;
    }
      
    //return false;
  }

}
