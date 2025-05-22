import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { ServicioUsuarioService } from 'src/app/services/servicio-usuario.service';

@Component({
  selector: 'app-modificar-usuario',
  templateUrl: './modificar-usuario.page.html',
  styleUrls: ['./modificar-usuario.page.scss'],
  standalone: false,
})
export class ModificarUsuarioPage {

  constructor(private router:Router, private Servicio: ServicioUsuarioService) { }

  ionViewWillEnter(){
    this.obtenerPorID(this.obtenerIDporURL());
  }

  regreso(){
    this.router.navigate(['/lista-usuarios']);
  }

  user: Usuario={
      id_usuario:0,
      nombre_usuario:"",
      passw:"",
      tipo_usuario:"",
      nivel_usuario:""
    };


  ModificarUsuario(){
    this.Servicio.actualizarUsuario(this.user).subscribe();
    this.router.navigate(['/lista-usuarios']);
  }

  idURL:number=0;
  obtenerIDporURL(){
    let url = this.router.url
    let arr=url.split("/",3)
    let id=parseInt(arr[2])
    return id;
  }
  obtenerPorID(id:number){
    this.Servicio.obtenerUsuarioPorID(id).subscribe(
      (resp: Usuario)=>{
        console.log(id);
        this.user = {
          id_usuario: resp.id_usuario,
          nombre_usuario: resp.nombre_usuario,
          passw: resp.passw,
          tipo_usuario: resp.tipo_usuario,
          nivel_usuario: resp.nivel_usuario
        }
      }
    )
  }

}
