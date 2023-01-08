import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { GraphicOneComponent } from './graphic-one/graphic-one.component';
import { PagesComponent } from './pages.component';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
  declarations: [
    DashboardComponent,
    GraphicOneComponent,
    PagesComponent,
    ProgressComponent
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    GraphicOneComponent,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class PagesModule { }
