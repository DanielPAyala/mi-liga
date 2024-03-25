import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './material/material.module';
import { EquipoComponent } from './components/equipo/equipo.component';
import { JuegoComponent } from './components/juego/juego.component';
import { JugadorComponent } from './components/jugador/jugador.component';
import { LoginComponent } from './components/login/login.component';
import { BuscadorPipe } from './pipes/buscador.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EquipoComponent,
    JuegoComponent,
    JugadorComponent,
    LoginComponent,
    BuscadorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
