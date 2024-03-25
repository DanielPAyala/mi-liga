import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Jugador } from '../interfaces/jugador.interface';
import { Observable, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JugadoresService {
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

  constructor(private http: HttpClient) {}

  obtenerJugadores(): Observable<Jugador[]> {
    return new Observable<Jugador[]>((subs) => {
      return subs.next(this.jugadores);
    }).pipe(
      delay(5000)
    );
  }
}
