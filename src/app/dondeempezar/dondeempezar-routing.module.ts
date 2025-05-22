import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DondeempezarPage } from './dondeempezar.page';

const routes: Routes = [
  {
    path: '',
    component: DondeempezarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DondeempezarPageRoutingModule {}
