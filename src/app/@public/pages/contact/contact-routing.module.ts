import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact.component';

const routes: Routes = [
  {
    path: '', 
    component: ContactComponent
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact.module').then(m=> m.ContactModule)
   } ,
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
