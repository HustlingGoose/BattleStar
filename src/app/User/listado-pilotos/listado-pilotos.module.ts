import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoPilotosPageRoutingModule } from './listado-pilotos-routing.module';

import { ListadoPilotosPage } from './listado-pilotos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoPilotosPageRoutingModule
  ],
  declarations: [ListadoPilotosPage]
})
export class ListadoPilotosPageModule {}
