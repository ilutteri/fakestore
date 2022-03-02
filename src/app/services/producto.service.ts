import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../class/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(
    private httpService:HttpClient
  ) { }

  getAll():Observable<Producto[]>{
    const url = "https://fakestoreapi.com/products";

    return this.httpService.get<Producto[]>(url);
  }
}
