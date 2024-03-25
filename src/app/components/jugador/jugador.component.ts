import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Jugador } from '../../interfaces/jugador.interface';
import { Equipo } from '../../interfaces/equipo.interface';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrl: './jugador.component.css',
})
export class JugadorComponent {
  @Input()
  jugador!: Jugador;

  @Input()
  equipo?: Equipo;

  @Output('onActivate')
  estado: EventEmitter<boolean> = new EventEmitter();

  deactivatePlayer() {
    this.estado.emit(false)
  }
}
