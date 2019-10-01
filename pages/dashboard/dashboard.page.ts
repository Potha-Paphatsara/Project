import { Component, OnInit } from '@angular/core';
import { CartService } from './../../services/cart.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  name:string = ""
  email:string = ""
  public isVisibaleCart = true;

  constructor(
    public cartService:CartService,
    public database: AngularFireDatabase,
    public afAuth: AngularFireAuth, 
    public user: UserService, 
    public router: Router
    ) { 
     
    }
    

  ngOnInit() {}


  /*menu(){
    this.router.navigate(['/menu/product-list'])
  }*/

  orders(){
    this.router.navigate(['/user-orders'])
  }  

  restaurant(){ this.router.navigate(['/shop'])}

  Account(){
    if( !this.user.getUID()){
      alert ("กรุณาเข้าสู่ระบบก่อน")
      this.router.navigate(['/auth-login'])
      return
    }else{
      this.router.navigate(['/menu/dashboard/tabs/account'])
    } 
  }

}
