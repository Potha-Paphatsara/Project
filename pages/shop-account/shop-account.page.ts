import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-shop-account',
  templateUrl: './shop-account.page.html',
  styleUrls: ['./shop-account.page.scss'],
})
export class ShopAccountPage implements OnInit {

  constructor(
    public user: UserService, 
    public router: Router) { }

  ngOnInit() {
  }

  MyShop(){
    this.router.navigate(['/tab-account'])
  }

  logout(){
    firebase.auth().signOut()
    this.user.setUID()
    this.router.navigate(['/auth-login'])
    
        console.log("hhhhhhhhhhhh")
  }
  

}
