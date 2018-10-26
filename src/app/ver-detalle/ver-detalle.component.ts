import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material'
import { BuscarService } from '../servicioBuscar/buscar.service';


@Component({
  selector: 'app-ver-detalle',
  templateUrl: './ver-detalle.component.html',
  styleUrls: ['./ver-detalle.component.css']
})
export class VerDetalleComponent implements OnInit {

  public titulo: string = '';
  public imagen: string = '';
  public imagen2: string = '';
  public precio: string = '';
  public estado: string = '';
  public mercadoPago: boolean = false;
  public direccionEnvio: string = '';
  public ciudadEnvio: string = '';
  public fecha_inicio: string = '';
  public fecha_fin: string = '';

  constructor(public dialogRef: MatDialogRef<VerDetalleComponent>,
             @Inject(MAT_DIALOG_DATA) public data: any,
             public buscarService: BuscarService) { }

  ngOnInit() {
    this.getDetalleProducto();
    }

  getDetalleProducto(){
    this.buscarService.detalleProducto(this.data.id).subscribe((detalle) =>{
      this.titulo = detalle.title;
      this.imagen = detalle.pictures[3].secure_url;
      this.imagen2 = detalle.pictures[1].secure_url;
      this.precio = detalle.price;
      this.estado = detalle.condition;
      this.mercadoPago = detalle.accepts_mercadopago;
      this.ciudadEnvio = detalle.seller_address.city.name;
      this.direccionEnvio = detalle.seller_address.address_line;
      this.fecha_inicio = detalle.start_time.substring(0,10);
      this.fecha_fin = detalle.stop_time.substring(0,10);
    });
  }

  cerrarDialog() {
    this.dialogRef.close();
  }

}

