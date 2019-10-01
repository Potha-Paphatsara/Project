import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(public api:ApiService) { }

  getCategories(params?: any){
    //return this.api.get('dashboard-slider');
    return new Promise((resolve, reject)=> {
       this.api.get('categories')
       .subscribe(data=> {
         resolve(data);
       }, err=> {
         reject(err);
       });
    });
  }

  getProducts(params?: any){
    //return this.api.get('dashboard-slider');
    return new Promise((resolve, reject)=> {
       this.api.get('products')
       .subscribe(data=> {
         resolve(data);
       }, err=> {
         reject(err);
       });
    });
  }
  
}
