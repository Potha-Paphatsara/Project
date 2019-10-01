import { CommonService } from './../../services/common.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './../../services/cart.service';

@Component({
  selector: 'app-cart-payment',
  templateUrl: './cart-payment.page.html',
  styleUrls: ['./cart-payment.page.scss'],
})
export class CartPaymentPage implements OnInit {

  public cartData:any;
  public paymentOptions:any;
  constructor(
    public cartService:CartService,
    public router:Router,
    public commonService:CommonService
    ) { 

      this.cartData = this.cartService.getCart();
        console.log(this.cartData);

        this.paymentOptions = [
           {id:2,type:"PayPal",code:'PAYPAL'},
           {id:3,type:"Strip",code:'STRIP'},
      ];

    }

  ngOnInit() {
  }
  
  setPaymentMethod(obj){
    this.cartData.paymentMethod = obj;
  }

  moveNext(){
    if(this.cartData.paymentMethod.code==''){
        this.commonService.showAlert("Select payment option to proceed.");
    }else{
        this.router.navigateByUrl('/cart-order-status');
    }
        
  }
}
