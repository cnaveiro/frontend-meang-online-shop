import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { Home2Component } from './home2.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home2', component: Home2Component
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
