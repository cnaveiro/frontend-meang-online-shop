import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AdminRoutingModule } from 'src/app/@admin/pages/admin-routing.module';


@NgModule({
  declarations: [
    PublicComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
    
  ]
})
export class PublicModule { }
