/* ---------- Generals ---------- */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  

/* ---------- Components ---------- */
import { CardComponent } from "../components/card/card.component";

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    CommonModule
  ],
  declarations: [
    CardComponent
  ],
})

export class SharedAdminModule { }