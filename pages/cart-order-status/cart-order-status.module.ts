import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { PipesModule } from './../../pipes/pipes.module';

import { IonicModule } from '@ionic/angular';
import { CartOrderStatusPage } from './cart-order-status.page';

const routes: Routes = [
  {
    path: '',
    component: CartOrderStatusPage
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
  declarations: [CartOrderStatusPage]
})
export class CartOrderStatusPageModule {}
