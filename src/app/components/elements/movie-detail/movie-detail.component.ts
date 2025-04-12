import { Component, Input, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonItem, IonLabel, IonText } from '@ionic/angular/standalone';

import { cashOutline, calendarOutline, add } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { MovieResult } from 'src/app/interfaces/interfaces';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
  imports: [
    IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonText,
    IonLabel, IonIcon, IonItem,
    CommonModule
  ],
  standalone: true
})
export class MovieDetailComponent implements OnInit {

  @Input() movie!: MovieResult;
  public imageBaseUrl = 'https://image.tmdb.org/t/p';

  constructor() {
    addIcons({ cashOutline, calendarOutline });
  }

  ngOnInit() { }

}
