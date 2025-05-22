import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-admin',
  templateUrl: './menu-admin.page.html',
  styleUrls: ['./menu-admin.page.scss'],
  standalone: false,
})
export class MenuAdminPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  regreso(){
    this.router.navigate(['/login']); 
  }

  listado(){
    this.router.navigate(['/lista-usuarios']);    
  }

}
