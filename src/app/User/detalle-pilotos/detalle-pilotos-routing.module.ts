import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallePilotosPage } from './detalle-pilotos.page';

const routes: Routes = [
  {
    path: '',
    component: DetallePilotosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallePilotosPageRoutingModule {}
