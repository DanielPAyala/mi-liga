import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';

import { AppComponent } from './app.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { JuegoComponent } from './components/juego/juego.component';
import { JugadorComponent } from './components/jugador/jugador.component';
import { LoginComponent } from './components/login/login.component';

import { BuscadorPipe } from './pipes/buscador.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EquipoComponent,
    JuegoComponent,
    JugadorComponent,
    LoginComponent,
    BuscadorPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
