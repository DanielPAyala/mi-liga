import { Component } from '@angular/core';
import { Jugador } from '../../interfaces/jugador.interface';
import { Equipo } from '../../interfaces/equipo.interface';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrl: './equipo.component.css',
})
export class EquipoComponent {
  nombre: string = 'Felinos';

  jugadores: Jugador[] = [];
  equipos: Equipo[] = [];

  jugador: Jugador = {
    nombre: 'Segrio',
    edad: 20,
    apodo: 'Felino',
    foto: 'imagen.jpg',
    posicion: 'Delantero',
    estado: false,
  };
  status: boolean = false;

  updateState(event: boolean) {
    this.jugador.estado = event;
  }
}
