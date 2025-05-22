import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'basico',
    loadChildren: () => import('./basico/basico.module').then( m => m.BasicoPageModule)
  },
  {
    path: 'reglas',
    loadChildren: () => import('./reglas/reglas.module').then( m => m.ReglasPageModule)
  },
  {
    path: 'gator',
    loadChildren: () => import('./gator/gator.module').then( m => m.GATORPageModule)
  },
  {
    path: 'movedef',
    loadChildren: () => import('./movedef/movedef.module').then( m => m.MovedefPageModule)
  },
  {
    path: 'dondeempezar',
    loadChildren: () => import('./dondeempezar/dondeempezar.module').then( m => m.DondeempezarPageModule)
  },
  {
    path: 'especial',
    loadChildren: () => import('./especial/especial.module').then( m => m.EspecialPageModule)
  },
  {
    path: 'menu-admin',
    loadChildren: () => import('./Admin/menu-admin/menu-admin.module').then( m => m.MenuAdminPageModule)
  },
  {
    path: 'lista-usuarios',
    loadChildren: () => import('./Admin/lista-usuarios/lista-usuarios.module').then( m => m.ListaUsuariosPageModule)
  },
  {
    path: 'detalle-usuarios/:id',
    loadChildren: () => import('./Admin/detalle-usuarios/detalle-usuarios.module').then( m => m.DetalleUsuariosPageModule)
  },
  {
    path: 'borrar-usuario/:id',
    loadChildren: () => import('./Admin/borrar-usuario/borrar-usuario.module').then( m => m.BorrarUsuarioPageModule)
  },
  {
    path: 'modificar-usuario/:id',
    loadChildren: () => import('./Admin/modificar-usuario/modificar-usuario.module').then( m => m.ModificarUsuarioPageModule)
  },
  {
    path: 'nuevo-usuario',
    loadChildren: () => import('./Admin/nuevo-usuario/nuevo-usuario.module').then( m => m.NuevoUsuarioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./Admin/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'menu-usuario',
    loadChildren: () => import('./Usuariosos/menu-usuario/menu-usuario.module').then( m => m.MenuUsuarioPageModule)
  },
  {
    path: 'menu-usuario',
    loadChildren: () => import('./User/menu-usuario/menu-usuario.module').then( m => m.MenuUsuarioPageModule)
  },
  {
    path: 'listado-pilotos',
    loadChildren: () => import('./User/listado-pilotos/listado-pilotos.module').then( m => m.ListadoPilotosPageModule)
  },
  {
    path: 'detalle-pilotos',
    loadChildren: () => import('./User/detalle-pilotos/detalle-pilotos.module').then( m => m.DetallePilotosPageModule)
  },
  {
    path: 'modificar-piloto',
    loadChildren: () => import('./User/modificar-piloto/modificar-piloto.module').then( m => m.ModificarPilotoPageModule)
  },
  {
    path: 'nuevo-piloto',
    loadChildren: () => import('./User/nuevo-piloto/nuevo-piloto.module').then( m => m.NuevoPilotoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
