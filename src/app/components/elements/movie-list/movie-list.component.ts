import { Component, Input, OnInit } from '@angular/core';
import { IonAvatar, IonItem, IonLabel, IonList, IonListHeader, IonBadge } from '@ionic/angular/standalone';
import { MovieResult } from 'src/app/interfaces/interfaces';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  imports: [
    IonList, IonItem, IonLabel, IonAvatar, IonBadge,
    //IonListHeader, 
    RouterModule,
    CommonModule],
  standalone: true

})
export class MovieListComponent implements OnInit {

  @Input() movies: MovieResult[] = [];
  public imageBaseUrl = 'https://image.tmdb.org/t/p';

  constructor() { }

  ngOnInit() { }

}
