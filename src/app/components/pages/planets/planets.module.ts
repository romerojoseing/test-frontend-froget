/* ---------- Generals ---------- */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

/* ---------- Components ---------- */
import { SharedAdminModule } from 'src/app/shared/shared-admin.module';
import { PlanetsComponent } from './planets.component';

const routes: Routes = [
  {
    path: '',
    component: PlanetsComponent
  }
]

@NgModule({
  declarations: [PlanetsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedAdminModule
  ]
})
export class PlanetsModule { }