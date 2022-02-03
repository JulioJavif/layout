import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { ProductosComponent } from './productos/productos.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

const routes: Routes = [
  { path: 'inicio', component: SkeletonComponent},
  { path: '', redirectTo: '/inicio', pathMatch: 'full'},
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'productos', component: ProductosComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }