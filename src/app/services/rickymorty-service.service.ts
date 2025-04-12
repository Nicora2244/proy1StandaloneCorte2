import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IMAGE_EPISODES } from '../config/image.service';
import { URL_RM } from '../config/url.servicios';

@Injectable({
  providedIn: 'root'
})
export class RickymortyServiceService {
  personajes: any[] = [];


  constructor(private http: HttpClient) {}

  getAllPersonajes(): any {
    let url = `${URL_RM}/character`;

    return this.http.get(url, {}).pipe(
      map((res: any) => {
        console.log('PERSONAJES_RK', res);
        return res;
      })
    );
  }

  getMasPersonajes(url: string): any {
    //let url = `${URL_RM}/character`;

    return this.http.get(url, {}).pipe(
      map((res: any) => {
        console.log('PERSONAJES_RK', res);
        return res;
      })
    );
  }

  getListaPersonajes(unaLista: string): Observable<any> {
    let url = `${URL_RM}/character/${unaLista}`;

   return this.http.get<any>(url);
 
   /*
    return this.http.get(url, {}).pipe(
      map((res: any) => {
        console.log('PERSONAJES_RK', res);
        return res;
      })
    );
  */
  }


  geUnPersonaje(unId: number): any {
    let url = `${URL_RM}/character/${unId}`;

    return this.http.get(url, {}).pipe(
      map((res: any) => {
        console.log('PERSONAJE_RK', res);
        return res;
      })
    );
  }

  geUnPersonajeUrl(url: string): any {
    //let url = `${URL_RM}/character/${unId}`;

    return this.http.get(url, {}).pipe(
      map((res: any) => {
        console.log('PERSONAJE_RK', res);
        return res;
      })
    );
  }



 getEpisodios(url: string):any {
    //let url = `${URL_RM}/episode`;

    return this.http.get(url, {}).pipe(
      map((res: any) => {

        let episodios = res.results;
        
        episodios.forEach((episode: any, index: any) => {

          //Aqui ajusto al foto del episodios
          //episode.image = images[index] || '';

          let listaPersonajes: string = '';
          //Aqui ajusto los personajes del episodio
          let personajes = episode.characters;
          personajes.forEach((personaje:any,index:any) => {

            let dato = personaje.split('/');
            let id = dato[dato.length - 1];

            if (index == 0) {
              listaPersonajes = listaPersonajes + id;
            } else {
              listaPersonajes = listaPersonajes + ',' + id;
            }
          });

          console.log("LISTAP",listaPersonajes)

          //let losPersonajes:any[] = [];
            
          /*
          this.getListaPersonajes(listaPersonajes)
          .toPromise()
          .then((resp1: any) => {
              //Aqui se realiza la asignacion de los personajes de la respuesta
              this.personajes = resp1;
              console.log("Personajes",this.personajes);
              //episode.characters = resp1;

            });
          */  
          //console.log("Personajes",this.personajes);

          //console.log("LOS PERSONAJES",this.personajes);
          
          
          /*
          let url1 = `${URL_RM}/character/${listaPersonajes}`;

          //let losPersonajes[] 
          this.http.get(url1, {}).pipe(
            map((res1: any) => {
              this.personajes = res;
              console.log('LOSPERSONAJES_RK', res1);
              //return res;
            })
          );
          */
          
          

          //console.log("LosPersonajes",losPersonajes)


        });
    


        /*
        let personajes: any[] = [];

        let datos: string = '';
    
        for (let i = 0; i < datos1.length; i++) {
          let unPersonaje = urlPersonajes[i];
          let dato = unPersonaje.split('/');
          let id = dato[dato.length - 1];
    
          if (i == 0) {
            datos = datos + id;
          } else {
            datos = datos + ',' + id;
          }
    
          personajes.push(unPersonaje);
        }
        */  
        
        //console.log(episodios);
    

        //console.log('EPISODIOS_RK', res);
        return res;
      })
    );
  }

  getEpisodio(unEpisodio:number){
    let url = `${URL_RM}/episode/${unEpisodio}`;

    return this.http.get(url, {}).pipe(
      map((res: any) => {

        
        let episodios = res;
        
        
        console.log(episodios);
    

        //console.log('EPISODIOS_RK', res);
        return res;
      })
    );

  }

  //Trae un sola Personaje
  getCharacterDetails(url: string): any{
    return this.http.get(url);
  }

  //Trae las imagenes para una lista de imagenes
  getImageEpisodes(list: number[]): any[] {
    return list
      .map(id => IMAGE_EPISODES.episodes.find(ep => ep.id === id))
      .filter(ep => ep)
      .map(ep => ep!.image);
  }


  //Trae las imagenes para una lista de imagenes
  getImageEpisode(unEpisodio: number): any{

    let data = IMAGE_EPISODES.episodes.find(ep => ep.id === unEpisodio);

    console.log(data);

    return data;
    /*
    return list
      .map(id => IMAGE_EPISODES.episodes.find(ep => ep.id === id))
      .filter(ep => ep)
      .map(ep => ep!.image);
    */
  }

  /*
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
  */

}
