import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoPilotoPage } from './nuevo-piloto.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoPilotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoPilotoPageRoutingModule {}
