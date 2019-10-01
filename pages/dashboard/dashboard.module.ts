import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DashboardPage } from './dashboard.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: DashboardPage,
    children:[
      {
         path:'nearme',
         loadChildren:'../tab-nearme/tab-nearme.module#TabNearmePageModule'
      },
      {
        path:'nearme/product-list/:cat_id',
        loadChildren:'../product-list/product-list.module#ProductListPageModule'
      },
      {
        path:'nearme/product-detail/:pro_id',
        loadChildren:'../product-detail/product-detail.module#ProductDetailPageModule'
      },
      {
        path:'explore',
        loadChildren:'../tab-explore/tab-explore.module#TabExplorePageModule'
      },
      {
        path:'offers',
        loadChildren:'../tab-offers/tab-offers.module#TabOffersPageModule'
      },
      {
        path:'account',
        loadChildren:'../tab-account/tab-account.module#TabAccountPageModule'
      },
      {
        path:'account/notification-settings',
        loadChildren:'../notification-settings/notification-settings.module#NotificationSettingsPageModule'
      },
      {
        path:'account/choose-language',
        loadChildren:'../choose-language/choose-language.module#ChooseLanguagePageModule'
      },

      
      
    ]
  },
  {
    path:'',
    redirectTo:'tabs/nearme',
    pathMatch:'full'
  }
];



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    FontAwesomeModule
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
