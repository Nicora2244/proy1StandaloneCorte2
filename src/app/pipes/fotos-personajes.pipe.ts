import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fotosPersonajes',
  standalone: true
})
export class FotosPersonajesPipe implements PipeTransform {

  
  /*
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
  */  
    
  
  transform(unosPersonajes: any): any {
    let fotosPersonajes: any[] = [];


    for (let i = 0; i < unosPersonajes.length; i++) {
      let unPersonaje = unosPersonajes[i];

      let foto = unPersonaje.image;

      fotosPersonajes.push(foto);
    }

    console.log("Array de Fotos",fotosPersonajes);
    return fotosPersonajes;


  }
  


}
