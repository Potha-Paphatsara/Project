import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './../../services/cart.service';
import { CommonService } from './../../services/common.service';

@Component({
  selector: 'app-cart-delivery-options',
  templateUrl: './cart-delivery-options.page.html',
  styleUrls: ['./cart-delivery-options.page.scss'],
})
export class CartDeliveryOptionsPage implements OnInit {

  myDate:any;
  minDate:any;
  maxDate:any;

  public myTime:any;
  public deliveryOptions:any;
  public isExpressDelivery:any;
  public cartData:any;
  constructor(
    public cartService:CartService,
    public router:Router,
    public commonService:CommonService
    ) {

      this.cartData = this.cartService.getCart();

      var cDate = new Date();
      this.minDate = cDate.getFullYear()+"-"+("0" + (cDate.getMonth() + 1)).slice(-2)+"-"+cDate.getDate();

      var lastDay = new Date(cDate.getFullYear(), cDate.getMonth() + 2, 0);
      this.maxDate = cDate.getFullYear()+"-"+("0" + (cDate.getMonth() + 2)).slice(-2)+"-"+lastDay.getDate();
      this.myDate =  new Date().toISOString();

      //console.log(lastDay);

      this.isExpressDelivery = true;
      this.deliveryOptions = [
        {id:1,type:"Express Delivery",amount:"10.00",code:'EXP'},
        {id:2,type:"Schedule Delivery",amount:"0",code:'SCH'}
        ];

     }

  ngOnInit() {
  }

  checkout() {
  
  }
  setDeliveryMethod(obj){
     this.cartData.deliveryMethod = obj;
     if(obj.code=='SCH') this.isExpressDelivery = false; else this.isExpressDelivery = true;
  }

  moveNext(){
    if(this.cartData.deliveryMethod.code==''){
      this.commonService.showAlert("Select delivery option to proceed.");
    }else{
      this.router.navigateByUrl('/cart-payment');
    }
    
  }

}
