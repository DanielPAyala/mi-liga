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

  jugadores: Jugador[] = [
    {
      nombre: 'Sergio',
      edad: 35,
      apodo: 'Felino',
      foto: 'imagen.jpg',
      posicion: 'delantero',
      estado: true,
    },
    {
      nombre: 'Manuel',
      edad: 25,
      apodo: 'Lolo',
      foto: 'imagen.jpg',
      posicion: 'delantero',
      estado: false,
    },
    {
      nombre: 'Hugo',
      edad: 25,
      apodo: 'Sheriff',
      foto: 'imagen.jpg',
      posicion: 'delantero',
      estado: true,
    },
    {
      nombre: 'Paco',
      edad: 22,
      apodo: 'dragon',
      foto: 'imagen.jpg',
      posicion: 'medio',
      estado: false,
    },
    {
      nombre: 'Luis',
      edad: 22,
      apodo: 'duck',
      foto: 'imagen.jpg',
      posicion: 'defensa',
      estado: false,
    },
    {
      nombre: 'Ernesto',
      edad: 28,
      apodo: 'stone',
      foto: 'imagen.jpg',
      posicion: 'defensa',
      estado: true,
    },
    {
      nombre: 'Juan',
      edad: 20,
      apodo: 'gacela',
      foto: 'imagen.jpg',
      posicion: 'lateral',
      estado: true,
    },
    {
      nombre: 'Jose',
      edad: 40,
      apodo: 'compa',
      foto: 'imagen.jpg',
      posicion: 'lateral',
      estado: false,
    },
  ];
  equipos: Equipo[] = [];

  presupuesto = 18000000;
  actualizacion = new Date();
  aficionados = 1500320.2345;
  efectividad = 0.8732;

  busqueda: string = '';

  updateState(event: boolean, jugador: Jugador) {
    jugador.estado = event;
  }

  activatePlayer(jugador: Jugador) {
    jugador.estado = true;
  }

  getColor(estado: boolean) {
    return estado ? 'blue' : 'red';
  }
}
