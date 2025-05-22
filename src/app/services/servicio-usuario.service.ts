import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class ServicioUsuarioService {

  constructor(private http:HttpClient) { }

  private url: string = 'http://localhost:8080/Rewloola/usuario';

  obtenerConexion():Observable<any>{
    return this.http.get(this.url);
  }


  listarUsuarios():Observable<any>{
    return this.http.get<any>(`${this.url}`)
  }
  agregarUsuario(nuevoUsuario:Usuario):Observable<any>{
    return this.http.post('http://localhost:8080/Rewloola/usuario',nuevoUsuario);
  }
  obtenerUsuarioPorID(id:number):Observable<Usuario>{
    return this.http.get<Usuario>('http://localhost:8080/Rewloola/usuario/'+id);
  }
  actualizarUsuario(a:Usuario):Observable<any>{
    return this.http.put(this.url,a);
  }
  eliminarPorID(id:number):Observable<any>{
    return this.http.delete('http://localhost:8080/Rewloola/usuario/'+id);
  }

  accedercompleto(nombre:string, password:string){
    return this.http.get<Usuario>("http://localhost:8080/Rewloola/loginB/"+nombre+"&"+password);
  }

  acceder(nombre:string, password: string):Observable<any>{
    return this.http.get<Usuario>("http://localhost:8080/Rewloola/login/"+nombre+"&"+password);
  }
  
}
