import { Component, Input, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle} from '@ionic/angular/standalone';

@Component({
  selector: 'app-personaje-card',
  templateUrl: './personaje-card.component.html',
  styleUrls: ['./personaje-card.component.scss'],
    imports: [
      IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle 
    ],
    standalone: true
})
export class PersonajeCardComponent  implements OnInit {
  @Input() personaje: any;
  
  constructor() { }

  ngOnInit() {}

}
