/* ---------- Generals ---------- */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

/* ---------- Components ---------- */
import { StarshipsComponent } from './starships.component';

const routes: Routes = [
  {
    path: '',
    component: StarshipsComponent
  }
]

@NgModule({
  declarations: [StarshipsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StarshipsModule { }