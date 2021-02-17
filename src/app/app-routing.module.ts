import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AltaComponent } from './componentes/alta/alta.component';
import { ListadoComponent } from './componentes/listado/listado.component';

const routes: Routes = [
  { path: '', component: AltaComponent},
  { path: 'listado', component: ListadoComponent}
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
