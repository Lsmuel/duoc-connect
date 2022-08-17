import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule),
    canLoad: [AuthGuard]
  
  },
  {
    path: 'medicina',
    loadChildren: () => import('./pages/medicina/medicina.module').then( m => m.MedicinaPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'datos',
    loadChildren: () => import('./pages/datos/datos.module').then( m => m.DatosPageModule)
    
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },  
  {
    path: 'publicaciones',
    loadChildren: () => import('./pages/publicaciones/publicaciones.module').then( m => m.PublicacionesPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'chatt',
    loadChildren: () => import('./pages/chatt/chatt.module').then( m => m.ChattPageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'conversation-page',
    loadChildren: () => import('./pages/conversation-page/conversation-page.module').then( m => m.ConversationPagePageModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'citas',
    loadChildren: () => import('./pages/citas/citas.module').then( m => m.CitasPageModule),
    canLoad: [AuthGuard]
   
  },
  {
    path: 'verayudantia',
    loadChildren: () => import('./pages/verayudantia/verayudantia.module').then( m => m.VerayudantiaPageModule),
    canLoad: [AuthGuard]
  },
 
 

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
