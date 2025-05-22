import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioUsuarioService } from 'src/app/services/servicio-usuario.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.page.html',
  styleUrls: ['./lista-usuarios.page.scss'],
  standalone: false,
})
export class ListaUsuariosPage {

  constructor(private router:Router,private Servicio:ServicioUsuarioService) { }
  datos:any;
  
  ionViewWillEnter(){
    this.Servicio.listarUsuarios().subscribe(
      sus =>{ //cuandoyolavi
        //se ejecuta si todo sale bien
        console.log("Lo que llegó del API: "+sus);
        this.datos=sus;
        let fila = this.datos;
        console.log(this.datos);
      },
      error => {
        //se ejecuta cuando hay un error
      }
    );
  }
  regreso(){
    this.router.navigate(['/menu-admin']);
  }
  nuevo(){
    this.router.navigate(['/nuevo-usuario']);
  }

}
