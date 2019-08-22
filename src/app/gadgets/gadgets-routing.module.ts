import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GadgetsListComponent } from './gadgets-list/gadgets-list.component';

const routes: Routes = [
  { path: '', component: GadgetsListComponent },
  { path: 'list', component: GadgetsListComponent },
  { path: '*', component: GadgetsListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class GadgetsRoutingModule { }
