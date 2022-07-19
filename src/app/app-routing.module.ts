import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    // esto es URL+ cada palabra o por defecto acá abajo
    path: 'admin',
    loadChildren: () => import('../app/@admin/pages/admin.module').then(m=> m.AdminModule)
  
      },
  {
    path: 'users',
    loadChildren: () => import('../app/@admin/pages/users/users.module').then(m=> m.UsersModule)
      },
   {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  } ,
   {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  } ,
  {
      path: 'about',
      loadChildren: () => import('./@public/pages/about/about.module').then(m=> m.AboutModule)
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, 
   {useHash: true,

  scrollPositionRestoration: 'enabled' 
  
   })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
