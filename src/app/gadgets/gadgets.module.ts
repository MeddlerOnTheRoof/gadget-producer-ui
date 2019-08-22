import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GadgetsListComponent } from './gadgets-list/gadgets-list.component';
import { GadgetsRoutingModule } from './gadgets-routing.module';

@NgModule({
  declarations: [GadgetsListComponent],
  imports: [
    CommonModule,
    GadgetsRoutingModule
  ]
})

export class GadgetsModule { }
