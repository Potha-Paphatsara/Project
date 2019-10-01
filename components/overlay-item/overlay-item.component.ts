import { Component,Input, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-overlay-item',
  templateUrl: './overlay-item.component.html',
  styleUrls: ['./overlay-item.component.scss'],
})
export class OverlayItemComponent implements OnInit {

  _isSkeleton:boolean;
  _obj:any;
  _image:string;
  _title:string;
  _price:string;

  _addon_title:string;
  _addon_sub_title:string;
  _addon_rating:string;
  _addon_reviews:string;
  _addon_discount:string;
  constructor(public cartService:CartService) { }

  ngOnInit() {}

  @Input() set isSkeleton(val: boolean) {
    this._isSkeleton = (val !== undefined && val !== null) ? val : false;
  }

  @Input() set object(val: any) {
    this._obj = (val !== undefined && val !== null) ? val : {};
  }


  addToCart(pObj,index){
    this.cartService.addToCart(pObj,index);
  }

  LessOneItem(pObj,index){
    this.cartService.removeOneProduct(pObj,index);
  }

}
