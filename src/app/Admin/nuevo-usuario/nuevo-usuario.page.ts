import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { ServicioUsuarioService } from 'src/app/services/servicio-usuario.service';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.page.html',
  styleUrls: ['./nuevo-usuario.page.scss'],
  standalone: false,
})
export class NuevoUsuarioPage implements OnInit {

  constructor(private router: Router, private Servicio: ServicioUsuarioService) { }

  ngOnInit() {
  }

  regreso(){
    this.router.navigate(['/lista-usuarios'])
  }
  datos:any;
  conn:number=0;
  Us: Usuario={
    id_usuario:0,
    nombre_usuario:"",
    passw:"",
    tipo_usuario:"",
    nivel_usuario:""
  };
  obtenerIDActual(){
    this.Servicio.listarUsuarios().subscribe(
      sus =>{
        console.log("Aqui empieza funcion");
        var l=sus.lenght;
        for(let i=0;i<l;i++){
        console.log("Bucle for");
          this.conn++;
          this.idu++;
          console.log(this.conn);
        }
        
      }
    );
  }

  idu:number=0;
/*
  obtenerUltimaID(){
    this.Servicio.obtenerUltimaID().subscribe(
      resp=>{
        this.ultimo.id=resp.id
        this.idu=this.ultimo.id+1;
      }
    );
  }
    */

  nuevo={
    id_usuario:0,
    nombre_usuario:"",
    passw:"",
    tipo_usuario:"",
    nivel_usuario:""
  }
  ultimo={
    id:this.conn,
    nombre_usuario:"",
    passw:"",
    tipo_usuario:"",
    nivel_usuario:""
  }

 
 

  nuevoUsuario(){



    this.Servicio.agregarUsuario(this.Us).subscribe();
    this.router.navigate(['/lista-usuarios']);
  }

}
