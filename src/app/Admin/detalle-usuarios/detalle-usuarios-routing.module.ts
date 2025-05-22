import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleUsuariosPage } from './detalle-usuarios.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleUsuariosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleUsuariosPageRoutingModule {}
