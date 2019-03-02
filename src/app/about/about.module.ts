import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: '', component: AboutComponent }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AboutComponent
  ]
})
export class AboutModule { }
