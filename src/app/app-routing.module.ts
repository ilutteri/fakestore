import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './pages/error/error.component';
import { LoginComponent } from './pages/login/login.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'productos',
    pathMatch: 'full',
  },
  {
    path: 'productos',
    component: ProductosComponent,
  },
  {
    path: 'usuarios',
    component: UsuariosComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    component: ErrorComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
