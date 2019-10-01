import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ShopMenuPage } from './shop-menu.page';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [
  {
    path: '',
    component: ShopMenuPage,
    children:[
      { path: 'shop', loadChildren: './pages/shop/shop.module#ShopPageModule' },
      { path: 'shop-address', loadChildren: './pages/shop-address/shop-address.module#ShopAddressPageModule' },
      { path: 'shop-notifications', loadChildren: './pages/shop-notifications/shop-notifications.module#ShopNotificationsPageModule' },
      { path: 'shop-payment', loadChildren: './pages/shop-payment/shop-payment.module#ShopPaymentPageModule' },
      { path: 'shop-account', loadChildren: './pages/shop-account/shop-account.module#ShopAccountPageModule' },
      { path:'tab-nearme',loadChildren:'../tab-nearme/tab-nearme.module#TabNearmePageModule' },
      { path:'dashboard', loadChildren:'../dashboard/dashboard.module#DashboardPageModule'},
      { path: 'order', loadChildren: './pages/order/order.module#OrderPageModule' },
      
    
  ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FontAwesomeModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ShopMenuPage]
})
export class ShopMenuPageModule {}

