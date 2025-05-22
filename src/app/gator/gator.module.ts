import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GATORPageRoutingModule } from './gator-routing.module';

import { GATORPage } from './gator.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GATORPageRoutingModule
  ],
  declarations: [GATORPage]
})
export class GATORPageModule {}
