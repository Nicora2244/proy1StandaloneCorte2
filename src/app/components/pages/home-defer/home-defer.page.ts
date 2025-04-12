//https://www.youtube.com/watch?v=tbrJJkSYQ04

import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InfiniteScrollCustomEvent, IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonLabel, IonAvatar, IonItem, IonAlert, IonSkeletonText, IonBadge, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/angular/standalone';
import { MovieService } from '../../../services/movie.service';
import { catchError, finalize } from 'rxjs';
import { MovieResult } from '../../../interfaces/interfaces';
import { RouterModule } from '@angular/router';
import { MovieListComponent } from '../../elements/movie-list/movie-list.component';

@Component({
  selector: 'app-home-defer',
  templateUrl: './home-defer.page.html',
  styleUrls: ['./home-defer.page.scss'],
  standalone: true,
  imports: [IonInfiniteScrollContent, IonInfiniteScroll, 
    IonAlert, 
    //IonBadge,IonAvatar,IonItem, IonLabel, IonList, 
    //RouterModule,
    IonContent, IonHeader, IonTitle, 
    IonToolbar, CommonModule, FormsModule,
    MovieListComponent
  ]
})
export class HomeDeferPage implements OnInit {
  private movieService = inject(MovieService);

  private currentPage = 1;
  public error = null;
  public isLoading = false;
  public movies: MovieResult[] =[];
  public imageBaseUrl = 'https://image.tmdb.org/t/p';

  public dummyArray = new Array(5);

  constructor() { 
    this.loadMovies();
  }

  ngOnInit() {
  }

  loadMovies(event?: InfiniteScrollCustomEvent) {
    this.error = null;

    if (!event){
      this.isLoading = true;
    }
    
    this.movieService.getTopRatedMovies(this.currentPage)
    .pipe(
       finalize( () =>{
        this.isLoading = false;
        if (event) {
          event.target.complete();
        }
       }),
       catchError((err: any) => {
        //this.isLoading = false;

        console.log("ERROR",err);
        this.error = err.error.status_message;

        console.log("ERRORR",this.error);
        return [];
      })
    )
    
    .subscribe({
      next: (res) => {
        console.log(res);

        
        this.movies.push(...res.results);
        

        if (event){
          event.target.disabled = res.total_pages === this.currentPage;
        }

      }
    }

  )};

  loadMore(event: InfiniteScrollCustomEvent) {
    this.currentPage++;
    this.loadMovies(event);

  }

}
