import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/class/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(

    private prodService:ProductoService

  ) { }

   productos: Producto[] = [];

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.prodService.getAll()
    .subscribe(prod=>{
      console.log(prod);
      this.productos = prod
    })  
  }

}
