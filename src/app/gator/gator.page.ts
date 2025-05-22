import { Component, OnInit } from '@angular/core';
import { IonItem, IonLabel } from '@ionic/angular/standalone';
@Component({
  selector: 'app-gator',
  templateUrl: './gator.page.html',
  styleUrls: ['./gator.page.scss'],

  standalone: false,
})
export class GATORPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  G: number = 4; 
  A: number = 0;
  T: number = 0;
  O: number = 0;
  R: number = 0;
  res: number =0;


  movimientoA1(){this.A=0;}
  movimientoA2(){this.A=1;}
  movimientoA3(){this.A=2;}
  movimientoA4(){this.A=3;}

  movimientoT1(){this.T=0;}
  movimientoT2(){this.T=1;}
  movimientoT3(){this.T=2;}
  movimientoT4(){this.T=3;}
  movimientoT5(){this.T=4;}

  rangocorto(){this.R=0;}
  rangomedio(){this.R=2;}
  rangolargo(){this.R=4;}

  calculo(event:any){
    this.res = event.target.value;
    this.res=this.G+this.A+this.T+this.O+this.R;
  }

  





}
