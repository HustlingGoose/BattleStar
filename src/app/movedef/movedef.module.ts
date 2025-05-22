import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovedefPageRoutingModule } from './movedef-routing.module';

import { MovedefPage } from './movedef.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovedefPageRoutingModule
  ],
  declarations: [MovedefPage]
})
export class MovedefPageModule {}
