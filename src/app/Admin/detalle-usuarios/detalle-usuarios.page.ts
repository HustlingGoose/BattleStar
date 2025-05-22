import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { ServicioUsuarioService } from 'src/app/services/servicio-usuario.service';

@Component({
  selector: 'app-detalle-usuarios',
  templateUrl: './detalle-usuarios.page.html',
  styleUrls: ['./detalle-usuarios.page.scss'],
  standalone: false,
})
export class DetalleUsuariosPage implements OnInit {

  constructor(private router:Router,private Servicio:ServicioUsuarioService) { }

  ngOnInit() {
    this.idURL=this.obtenerIDporURL();
    this.obtenerPorID(this.idURL)
  }

  regreso(){
    this.router.navigate(['/lista-usuarios']);
  }
  Us: Usuario={
    id_usuario:0,
    nombre_usuario:"",
    passw:"",
    tipo_usuario:"",
    nivel_usuario:""
  };
 

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
        this.Us = {
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
