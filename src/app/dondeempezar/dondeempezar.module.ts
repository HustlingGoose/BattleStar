import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DondeempezarPageRoutingModule } from './dondeempezar-routing.module';

import { DondeempezarPage } from './dondeempezar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DondeempezarPageRoutingModule
  ],
  declarations: [DondeempezarPage]
})
export class DondeempezarPageModule {}
