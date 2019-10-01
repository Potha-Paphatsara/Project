import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { PipesModule } from './../../pipes/pipes.module';

import { IonicModule } from '@ionic/angular';
import { CartDeliveryOptionsPage } from './cart-delivery-options.page';

const routes: Routes = [
  {
    path: '',
    component: CartDeliveryOptionsPage
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
  declarations: [CartDeliveryOptionsPage]
})
export class CartDeliveryOptionsPageModule {}
