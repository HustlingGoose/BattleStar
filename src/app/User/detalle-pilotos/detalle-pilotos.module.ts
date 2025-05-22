import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallePilotosPageRoutingModule } from './detalle-pilotos-routing.module';

import { DetallePilotosPage } from './detalle-pilotos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallePilotosPageRoutingModule
  ],
  declarations: [DetallePilotosPage]
})
export class DetallePilotosPageModule {}
