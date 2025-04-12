import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, InfiniteScrollCustomEvent, IonInfiniteScroll, IonInfiniteScrollContent } from '@ionic/angular/standalone';
//import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { URL_RM } from 'src/app/config/url.servicios';
import { RickymortyServiceService } from 'src/app/services/rickymorty-service.service';
import { EpisodioListComponent } from '../elements/episodio-list/episodio-list.component';
import { SwiperSlidesComponent } from '../elements/swiper-slides/swiper-slides.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, 
    //ExploreContainerComponent,
    IonInfiniteScroll, IonInfiniteScrollContent,
    
    EpisodioListComponent
  ],
})
export class Tab3Page {
  episodios: any[] = [];
  episodios_temp: any[] = [];
  url_next: string = `${URL_RM}/episode`;

  //Estas son las variables de titulo y subtitulo que voy a pasar
  titulo1: string = 'Episodios';
  subtitulo1: string = 'de Ricky & Morty';

  completado: boolean = false;

  constructor(private bd: RickymortyServiceService) { }

  ngOnInit() {
    //Aqui realizo la carga real de los personajes, despues que toda la pagina
    //ha sido cargada

    console.log(this.url_next);

    this.cargarEpisodios();
  }

  //El metodo que va a cargar los personajes
  async cargarEpisodios() {
    //this.cargando = true;
    await this.bd
      .getEpisodios(this.url_next)
      .toPromise()
      .then((resp: any) => {
        //Aqui se realiza la asignacion de los personajes de la respuesta
        this.episodios_temp = resp.results;

        console.log('MISEPISODIOS', this.episodios_temp);

        this.url_next = resp.info.next;
        console.log('SIGUIENTE', this.url_next);

        this.loadCharactersForEpisodes();

        this.loadEpisodeImages();

        this.episodios.push(...this.episodios_temp);

        console.log('MISEPISODIOS', this.episodios);
      });
  }

  //El metodo que va a cargar los personajes
  async cargarMasEpisodios() {
    //this.cargando = true;
    await this.bd
      .getEpisodios(this.url_next)
      .toPromise()
      .then((resp: any) => {
        this.episodios_temp = resp.results;
        //Aqui se realiza la asignacion de los personajes de la respuesta

        console.log('MISEPISODIOS', this.episodios_temp);

        this.url_next = resp.info.next;
        console.log('SIGUIENTE', this.url_next);

        this.loadCharactersForEpisodes();
        this.loadEpisodeImages();

        this.episodios.push(...this.episodios_temp);

        console.log('MISEPISODIOS', this.episodios);
      });
  }

  async loadCharactersForEpisodes() {
    for (let episode of this.episodios_temp) {
      const charactersPromises = episode.characters.map((url: string) =>
        this.loadDetailsCharacter(url)
      );
      const characters = await Promise.all(charactersPromises);
      episode.characters = characters;
    }

    console.log('Updated episodes with characters:', this.episodios_temp);
  }

  async loadDetailsCharacter(url: string) {
    try {
      const response: any = await this.bd.getCharacterDetails(url).toPromise();
      return response;
    } catch (error) {
      console.error('Error fetching character details:', error);
      return {};
    }
  }

  loadEpisodeImages() {
    const episodeIds = this.episodios_temp.map((ep: { id: any }) => ep.id);
    const images = this.bd.getImageEpisodes(episodeIds);

    this.episodios_temp.forEach((episode: any, index: any) => {
      episode.image = images[index] || '';
    });
    console.log('Episodes with images:', this.episodios_temp);
  }

  onIonInfinite(ev: InfiniteScrollCustomEvent) {
    if (this.url_next !== null) {

      this.cargarMasEpisodios();

      setTimeout(() => {
        ev.target.complete();
        //(ev as InfiniteScrollCustomEvent).target.complete();
      }, 3000);


    }
    else {
      this.completado = true;
      setTimeout(() => {
        ev.target.complete();
        //(ev as InfiniteScrollCustomEvent).target.complete();
      }, 0);

    }


  }
}
