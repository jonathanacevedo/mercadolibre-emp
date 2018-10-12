import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuscarService {

  public url: string = "https://api.mercadolibre.com/sites/MCO/search?q=";


  constructor(private http: HttpClient) {   }

  buscarProducto(producto: String) {
    return this.http.get<any>(this.url+producto);
  }
}

