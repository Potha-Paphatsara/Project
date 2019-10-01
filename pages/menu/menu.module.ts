import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { IonicModule } from '@ionic/angular';
import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
        { path:'dashboard', loadChildren:'../dashboard/dashboard.module#DashboardPageModule'},
        { path: 'user-change-password', loadChildren: '../user-change-password/user-change-password.module#UserChangePasswordPageModule' },
        { path: 'user-orders', loadChildren: '../user-orders/user-orders.module#UserOrdersPageModule' },
        { path: 'user-wish-list', loadChildren: '../user-wish-list/user-wish-list.module#UserWishListPageModule' },
        { path: 'faq', loadChildren: '../faq/faq.module#FaqPageModule' },
        { path: 'feedback', loadChildren: '../feedback/feedback.module#FeedbackPageModule' },
        { path: 'about-us', loadChildren: '../about-us/about-us.module#AboutUsPageModule' },
        { path: 'term-and-condition', loadChildren: '../term-and-condition/term-and-condition.module#TermAndConditionPageModule' },
        { path: 'privacy-polices', loadChildren: '../privacy-polices/privacy-polices.module#PrivacyPolicesPageModule' },
        { path: 'product-list',loadChildren:'../product-list/product-list.module#ProductListPageModule'},
      
      
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
  declarations: [MenuPage]
})
export class MenuPageModule {}
