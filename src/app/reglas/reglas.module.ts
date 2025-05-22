import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReglasPageRoutingModule } from './reglas-routing.module';

import { ReglasPage } from './reglas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReglasPageRoutingModule
  ],
  declarations: [ReglasPage]
})
export class ReglasPageModule {}
