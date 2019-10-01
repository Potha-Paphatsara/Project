import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TermAndConditionPage } from './term-and-condition.page';

const routes: Routes = [
  {
    path: '',
    component: TermAndConditionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TermAndConditionPage]
})
export class TermAndConditionPageModule {}
