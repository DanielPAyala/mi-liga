import { Pipe, PipeTransform } from '@angular/core';
import { Jugador } from '../interfaces/jugador.interface';

@Pipe({
  name: 'buscador',
})
export class BuscadorPipe implements PipeTransform {
  transform(items: Jugador[], value: string): any {
    if (items.length === 0 || !items) {
      return items;
    }

    return items.filter(
      (item) => item.nombre.toLowerCase().indexOf(value.toLowerCase()) >= 0
    );
  }
}
