/* ---------- Generals ---------- */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

/* ---------- Components ---------- */
import { SharedAdminModule } from 'src/app/shared/shared-admin.module';
import { PeoplesComponent } from './peoples.component';


const routes: Routes = [
  {
    path: '',
    component: PeoplesComponent
  }
]

@NgModule({
  declarations: [PeoplesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedAdminModule
  ]
})
export class PeoplesModule { }