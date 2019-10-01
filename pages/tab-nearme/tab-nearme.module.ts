
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IonicModule } from '@ionic/angular';
import { TabNearmePage } from './tab-nearme.page';
import { SlidingBannersComponent } from '../../components/sliding-banners/sliding-banners.component';
import { LayeredItemComponent } from '../../components/layered-item/layered-item.component';

const routes: Routes = [
  {
    path: '',
    component: TabNearmePage
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
  declarations: [TabNearmePage,SlidingBannersComponent,LayeredItemComponent]
})
export class TabNearmePageModule {}
