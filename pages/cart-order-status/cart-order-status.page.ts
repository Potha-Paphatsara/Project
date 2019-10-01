import { Component, OnInit } from '@angular/core';
import { CartService } from './../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-order-status',
  templateUrl: './cart-order-status.page.html',
  styleUrls: ['./cart-order-status.page.scss'],
})
export class CartOrderStatusPage implements OnInit {

  public cartData:any;
  constructor(public cartService:CartService, public router:Router) { }

  ngOnInit() {
    this.cartData = this.cartService.getCart();
    console.log(this.cartData);
  }

  continueShopping() {
    this.cartService.resetCart();
    this.router.navigateByUrl('/menu/dashboard');
  }


}
