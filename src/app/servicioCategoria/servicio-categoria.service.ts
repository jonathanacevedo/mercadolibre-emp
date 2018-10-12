import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicioCategoriaService {

  public url: string = "https://api.mercadolibre.com/sites/MCO";

  constructor(private http: HttpClient) {

   }

    listarCategorias() {
    return this.http.get<any>(this.url);
  }
}
