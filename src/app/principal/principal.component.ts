import { Component, OnInit } from '@angular/core';
import { BuscarService } from '../servicioBuscar/buscar.service';
import { ServicioCategoriaService } from '../servicioCategoria/servicio-categoria.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { VerDetalleComponent } from '../ver-detalle/ver-detalle.component';



@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  public producto: string;
  public nombre: string;
  public valor: string;
  public urlFoto: string;

  public categorias: any = '';

  public resultado: any = '';

  constructor(public buscarService : BuscarService,
              public getCategorias : ServicioCategoriaService,
               public dialog: MatDialog) {  }

  ngOnInit() {
    this.listarCategorias();
  }

  buscarProducto() {
    this.buscarService.buscarProducto(this.producto).subscribe((data) => {
      this.resultado = data;
    })
  }

  listarCategorias() {
    this.getCategorias.listarCategorias().subscribe((data) => {
      this.categorias = data.categories;
      console.log(data.categories);
    }
  );
  }

  clickDetalle(item: any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '55%';
    dialogConfig.height = '40%';
    dialogConfig.hasBackdrop = true;
    dialogConfig.position = {
       'top': '10%',
       'left': '20%'
     };

     dialogConfig.data = {
       id: item
      /*titulo: item.title,
      precio: item.price,
      condicion: item.attributes[0].value_name,
      imagen: item.thumbnail,
      lugar: item.address.city_name*/
    };

    let dialogRef = this.dialog.open(VerDetalleComponent, dialogConfig);
  }
}
