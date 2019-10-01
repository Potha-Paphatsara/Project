import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PrivacyPolicesPage } from './privacy-polices.page';

const routes: Routes = [
  {
    path: '',
    component: PrivacyPolicesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PrivacyPolicesPage]
})
export class PrivacyPolicesPageModule {}
