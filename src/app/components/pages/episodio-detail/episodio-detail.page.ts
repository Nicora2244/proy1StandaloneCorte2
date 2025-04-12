import {
  Component,
  inject,
  Input,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { RickymortyServiceService } from 'src/app/services/rickymorty-service.service';
import { catchError, finalize } from 'rxjs';
import { EpisodioCardComponent } from '../../elements/episodio-card/episodio-card.component';

@Component({
  selector: 'app-episodio-detail',
  templateUrl: './episodio-detail.page.html',
  styleUrls: ['./episodio-detail.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, 
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    EpisodioCardComponent
  ],
})
export class EpisodioDetailPage implements OnInit {
  private rmService = inject(RickymortyServiceService);

  public imageBaseUrl = 'https://image.tmdb.org/t/p';

  public episodio: WritableSignal<any | null> = signal(null);

  public error = null;
  public isLoading = false;

  @Input()
  set id(episodioId: number) {

    this.rmService.getEpisodio(episodioId).subscribe((episodio) => {

      //Ajusta la lista de personajes
      let listaPersonajes: string = '';
      //Aqui ajusto los personajes del episodio
      let personajes = episodio.characters;

      //Recorre los personajes iniciales y ajusta la lista de personajes
      personajes.forEach((personaje: any, index: any) => {
        let dato = personaje.split('/');
        let id = dato[dato.length - 1];

        if (index == 0) {
          listaPersonajes = listaPersonajes + id;
        } else {
          listaPersonajes = listaPersonajes + ',' + id;
        }
      });

      //Carga los personajes y los ajusta al episodio
      this.rmService.getListaPersonajes(listaPersonajes).subscribe({
        next: (res) => {
          episodio.characters = res; 
        },
      });

      //Ajusta la imagen del Episodio
      const imagenEpisodio = this.rmService.getImageEpisode(episodio.id);
      episodio.image = imagenEpisodio.image;  

      console.log("episodio",episodio)

      this.episodio.set(episodio);

    });
  }

  constructor() {}

  ngOnInit() {
  }


}
