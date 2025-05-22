import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-usuario',
  templateUrl: './menu-usuario.page.html',
  styleUrls: ['./menu-usuario.page.scss'],
  standalone: false,
})
export class MenuUsuarioPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  regreso(){
    this.router.navigate(['/login']); 
  }

}
