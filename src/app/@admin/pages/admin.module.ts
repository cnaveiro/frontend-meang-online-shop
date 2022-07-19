import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from '../core/component/header/header.component';
import { TitleComponent } from './../core/component/title/title.component';
import { SidebarComponent } from '../core/component/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    TitleComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
