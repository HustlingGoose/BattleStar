import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Lo básico', url: '/basico', icon: 'easel' },
    { title: 'Reglas básicas', url: '/reglas', icon: 'compass' },
    { title: 'Movimiento', url: '/movedef', icon: 'move' },
    { title: 'G.A.T.O.R', url: '/gator', icon: 'eye'},
    { title: 'Reglas especiales', url: '/especial', icon: 'play' },
    { title: 'Ingresar', url: '/login', icon: 'key-outline' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
