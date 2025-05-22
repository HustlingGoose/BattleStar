import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovedefPage } from './movedef.page';

const routes: Routes = [
  {
    path: '',
    component: MovedefPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovedefPageRoutingModule {}
