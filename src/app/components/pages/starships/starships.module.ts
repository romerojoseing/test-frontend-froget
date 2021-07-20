/* ---------- Generals ---------- */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

/* ---------- Components ---------- */
import { SharedAdminModule } from 'src/app/shared/shared-admin.module';
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
    RouterModule.forChild(routes),
    SharedAdminModule
  ]
})
export class StarshipsModule { }