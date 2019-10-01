import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShopPaymentFormPage } from './shop-payment-form.page';

const routes: Routes = [
  {
    path: '',
    component: ShopPaymentFormPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShopPaymentFormPage]
})
export class ShopPaymentFormPageModule {}
