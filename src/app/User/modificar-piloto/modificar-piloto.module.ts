import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarPilotoPageRoutingModule } from './modificar-piloto-routing.module';

import { ModificarPilotoPage } from './modificar-piloto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarPilotoPageRoutingModule
  ],
  declarations: [ModificarPilotoPage]
})
export class ModificarPilotoPageModule {}
