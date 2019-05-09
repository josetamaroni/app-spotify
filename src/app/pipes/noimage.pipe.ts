import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images: any[]): string {
    // Se condiciona para las imagenes vacias.
    if (!images) {
      return 'assets/img/noimage.png';
    }
    // Se condiciona para el arreglo de imagenes.
    if (images.length > 0) {
    return images[0].url;
    } else {
      return 'assets/img/noimage.png';
    }

  }
}
