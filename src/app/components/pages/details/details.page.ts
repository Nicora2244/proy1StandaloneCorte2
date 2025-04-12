import { Component, inject, Input, input, OnInit, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButtons,IonBackButton, 
  //IonCardTitle, IonCardSubtitle, IonCardHeader, IonCardContent, IonCard,
  //IonText, IonLabel, IonIcon, IonItem
} from '@ionic/angular/standalone';
import { MovieService } from 'src/app/services/movie.service';
import { MovieResult } from 'src/app/interfaces/interfaces';

//import { cashOutline, calendarOutline, add } from 'ionicons/icons';
//import { addIcons } from 'ionicons';
import { MovieDetailComponent } from '../../elements/movie-detail/movie-detail.component';


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton,
    
    //Card de la Pelicula
    //IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonText,
    //IonLabel, IonIcon, IonItem,
    MovieDetailComponent
  ]
})

export class DetailsPage implements OnInit {

  private movieService = inject(MovieService);

  public imageBaseUrl = 'https://image.tmdb.org/t/p';
  public movie: WritableSignal<MovieResult | null> = signal(null);

  @Input()
  set id(movieId: string) {
    this.movieService.getMovieDetails(movieId).subscribe((movie) => {
      console.log(movie);

      this.movie.set(movie);

    }
    );

  }

  constructor() { 
    //addIcons({cashOutline,calendarOutline});
  }

  ngOnInit() {
  }

}
