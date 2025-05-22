import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleUsuariosPageRoutingModule } from './detalle-usuarios-routing.module';

import { DetalleUsuariosPage } from './detalle-usuarios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleUsuariosPageRoutingModule
  ],
  declarations: [DetalleUsuariosPage]
})
export class DetalleUsuariosPageModule {}
