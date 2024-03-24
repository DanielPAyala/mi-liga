import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Jugador } from '../../interfaces/jugador.interface';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrl: './jugador.component.css',
})
export class JugadorComponent {
  // jugador!: Jugador;
  @Input()
  jugador: string = 'Sergio';

  @Input()
  equipo: string = 'Sin equipo';

  @Output('onActivate')
  estado: EventEmitter<boolean> = new EventEmitter();

  activatePlayer() {
    this.estado.emit(true)
  }
}
