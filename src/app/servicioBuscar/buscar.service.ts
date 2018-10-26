import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BuscarService {

  public url: string = "https://api.mercadolibre.com/sites/MCO/search?q=";
  public urlItem: string = "https://api.mercadolibre.com/items/";


  constructor(private http: HttpClient) {   }

  buscarProducto(producto: String) {
    return this.http.get<any>(this.url+producto);
  }

  detalleProducto(item: string){
    return this.http.get<any>(this.urlItem+item);
  }
}

