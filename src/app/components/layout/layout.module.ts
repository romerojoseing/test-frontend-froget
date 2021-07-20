/* ---------- Generals ---------- */
import { NgModule } from '@angular/core';

/* ---------- Modules ---------- */
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/* ---------- Components ---------- */
import { BaseComponent } from './base/base.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    BaseComponent, 
    SidebarComponent, 
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  providers: [ ]
})
export class LayoutModule { }
