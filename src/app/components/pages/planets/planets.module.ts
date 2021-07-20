/* ---------- Generals ---------- */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

/* ---------- Components ---------- */
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
    RouterModule.forChild(routes)
  ]
})
export class PlanetsModule { }