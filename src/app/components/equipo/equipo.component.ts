import { Component, OnInit } from '@angular/core';

import { Jugador } from '../../interfaces/jugador.interface';
import { Equipo } from '../../interfaces/equipo.interface';
import { JugadoresService } from '../../services/jugadores.service';

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrl: './equipo.component.css',
})
export class EquipoComponent implements OnInit {
  nombre: string = 'Felinos';

  jugadores: Jugador[] = [];
  equipos: Equipo[] = [];

  presupuesto = 18000000;
  actualizacion = new Date();
  aficionados = 1500320.2345;
  efectividad = 0.8732;

  busqueda: string = '';

  isLoading: boolean = false;

  constructor(private jugadorService: JugadoresService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.jugadorService.obtenerJugadores().subscribe((resp) => {
      this.jugadores = resp;
      this.isLoading = false;
    });
  }

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
