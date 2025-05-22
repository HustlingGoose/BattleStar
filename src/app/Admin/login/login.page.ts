import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Usuario } from 'src/app/models/Usuario';
import { ServicioUsuarioService } from 'src/app/services/servicio-usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private Servicio: ServicioUsuarioService, private alertController:AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Usuario no encontrado',
      subHeader: 'Verifica los datos',
      message: 'El usuario ingresado no coincide con ninguno en la base de datos, verifica los datos o no tendras acceso.',
      buttons: ['OK'],
    });

    await alert.present();
  }


  async BienvenidaAdm() {
    const alert = await this.alertController.create({
      header: 'Bienvenido '+this.user.nombre_usuario,
      subHeader: '',
      message: 'Ingresando a la interfaz de Administrador',
      buttons: ['OK'],
    });

    await alert.present();
  }
  async BienvenidaUser() {
    const alert = await this.alertController.create({
      header: 'Bienvenido '+this.user.nombre_usuario,
      subHeader: '',
      message: 'Ingresando a la interfaz de Usuario',
      buttons: ['OK'],
    });

    await alert.present();
  }

  user: Usuario={
      id_usuario:0,
      nombre_usuario:"",
      passw:"",
      tipo_usuario:"",
      nivel_usuario:""
    };

  EntrarUsuario(){
    //this.router.navigate(["/menu-usuario/1"]);
  }



  loginC(nombre:string,password:string){
    this.Servicio.accedercompleto(nombre,password).subscribe(
      respuesta => {

        /*if (respuesta===null){
          this.router.navigate(["/listado-local"]);
        }*/
        this.user={
          id_usuario:respuesta.id_usuario,
          nombre_usuario:respuesta.nombre_usuario,
          passw:respuesta.passw,
          tipo_usuario:respuesta.tipo_usuario,
          nivel_usuario:respuesta.nivel_usuario,
        }

        if (respuesta.tipo_usuario==="Admin"){
          console.log("Es Admin");
          this.BienvenidaAdm();
          this.router.navigate(["/menu-admin"]);
        }else{
          if(respuesta.tipo_usuario==="Usuario"){
            console.log("Es Usuario");
            this.BienvenidaUser();
            //this.router.navigate(["/menu-usuario/"+this.user.id_usuario]);
            this.router.navigate(["/menu-usuario"]);
          }else{
            this.presentAlert();
          }
      
        }
      },
      error =>{
        console.log("Ese registro no existe");
        
      }
    )
  }
  

  nombre:string="";
  password:string="";
  loguearse(nombre: string, password:string){
    this.Servicio.acceder(nombre,password).subscribe(
      respuesta => {
        if (respuesta===true){
          console.log(respuesta);
          this.router.navigate(["/menu-principal"]);
        }else{
          this.presentAlert();
      
        }
      },
      error =>{
        console.log("Ese registro no existe");
        
      }
    )
  }

}
