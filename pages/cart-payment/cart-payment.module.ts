import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { PipesModule } from './../../pipes/pipes.module';

import { IonicModule } from '@ionic/angular';
import { CartPaymentPage } from './cart-payment.page';

const routes: Routes = [
  {
    path: '',
    component: CartPaymentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CartPaymentPage]
})
export class CartPaymentPageModule {}
