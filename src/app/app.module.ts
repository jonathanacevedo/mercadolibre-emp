import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';

import { BuscarService } from './servicioBuscar/buscar.service';
import { VerDetalleComponent } from './ver-detalle/ver-detalle.component'

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    VerDetalleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule
  ],
  entryComponents: [VerDetalleComponent],
  providers: [    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
