import { Component, OnInit } from '@angular/core';
import { IonItem, IonLabel } from '@ionic/angular/standalone';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-reglas',
  templateUrl: './reglas.page.html',
  styleUrls: ['./reglas.page.scss'],

  standalone: false,
})
export class ReglasPage implements OnInit {
  showGeneralidades: boolean = true;
  showFases: boolean = true;


  toggleGeneralidades(){
    this.showGeneralidades = !this.showGeneralidades;
  }
  toggleFases(){
    this.showFases=!this.showFases;
  }
  toggleAll(){
    this.showFases=true;
    this.showGeneralidades=true;
  }


  constructor() { }

  ngOnInit() {
  }

}
