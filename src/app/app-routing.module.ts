import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { ProductosComponent } from './productos/productos.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  { path: 'inicio', component: SkeletonComponent},
  { path: '', redirectTo: '/inicio', pathMatch: 'full'},
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'tiendas', component: ProductosComponent},
  { path: 'login', component: LoginComponent},
  { path: 'registro', component: RegistroComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }