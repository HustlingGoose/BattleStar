import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoPilotoPageRoutingModule } from './nuevo-piloto-routing.module';

import { NuevoPilotoPage } from './nuevo-piloto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoPilotoPageRoutingModule
  ],
  declarations: [NuevoPilotoPage]
})
export class NuevoPilotoPageModule {}
