import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { PipesModule } from './../../pipes/pipes.module';

import { IonicModule } from '@ionic/angular';
import { CartDeliveryAddressPage } from './cart-delivery-address.page';

//import { CartDeliveryAddressFormPageModule } from './../cart-delivery-address-form/cart-delivery-address-form.module';


const routes: Routes = [
  {
    path: '',
    component: CartDeliveryAddressPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PipesModule,
    //CartDeliveryAddressFormPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CartDeliveryAddressPage]
})
export class CartDeliveryAddressPageModule {}
