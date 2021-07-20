/* ---------- Generals ---------- */
import { NgModule } from '@angular/core';

/* ---------- Modules ---------- */
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* ---------- Components ---------- */
import { BaseComponent } from './base/base.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    BaseComponent, 
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [ ]
})
export class LayoutModule { }
