
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { PipesModule } from './../../pipes/pipes.module';

import { IonicModule } from '@ionic/angular';
import { ProductDetailPage } from './product-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ProductDetailPage
  }
];

@NgModule({
  imports: [
    PipesModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProductDetailPage]
})
export class ProductDetailPageModule {}
