import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { LoginComponent } from './pages/login/login.component';
import { ErrorComponent } from './pages/error/error.component';
import { CarritoService } from './services/carrito.service';
import { ProductoService } from './services/producto.service';
import { UserService } from './services/user.service';

import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    ProductosComponent,
    UsuariosComponent,
    LoginComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CarritoService,
    ProductoService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
