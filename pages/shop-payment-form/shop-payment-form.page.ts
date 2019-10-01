import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth'
import { AngularFirestore } from 'angularfire2/firestore'
import { UserService } from '../../services/user.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database'
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-shop-payment-form',
  templateUrl: './shop-payment-form.page.html',
  styleUrls: ['./shop-payment-form.page.scss'],
})
export class ShopPaymentFormPage implements OnInit {
  bank:string=""
  account_name:string="" //------ชื่อบัญชี-------
  account_number:number  //------เลขที่บัญชี----------
  Cash_on_Delivery:boolean  //-----เก็บเงินปลายทาง---------
  PromptPay:number  //-----เลขพร้อมเพย์---------
  PromptPay_name:string=''   //-----ชื่อพร้อมเพย์---------
  constructor(
    public database: AngularFireDatabase,
		public afAuth: AngularFireAuth,
		public afstore: AngularFirestore,
		public user: UserService,
		public alertController: AlertController,
    public router: Router,
    private motalController:ModalController
  ) {
    const personRef: firebase.database.Reference = firebase.database().ref('/shop/'+this.user.getUID()+'/Payment');
    personRef.on('value', personSnapshot => {



  this.PromptPay = personSnapshot.val().PromptPay.PromptPay
  this.PromptPay_name = personSnapshot.val().PromptPay.PromptPay_name
  this.Cash_on_Delivery = personSnapshot.val().Cash_on_Delivery
  this.bank = personSnapshot.val().bank.bank
  this.account_name = personSnapshot.val().bank.account_name
  this.account_number = personSnapshot.val().bank.account_number


    });
   }

  ngOnInit() {
  }

  writeNewPost() {
  
    var updates = {};
    updates['/user/'+this.user.getUID() +'/Payment/' + '/Cash_on_Delivery' ] = this.Cash_on_Delivery;
    updates['/user/'+this.user.getUID() +'/Payment/' +'/PromptPay/' + '/PromptPay_name' ] = this.PromptPay_name;
    updates['/user/'+this.user.getUID() +'/Payment/' +'/PromptPay/' + '/PromptPay' ] = this.PromptPay;
    updates['/user/'+this.user.getUID() +'/Payment/' +'/bank/' + '/bank' ] = this.bank;
    updates['/user/'+this.user.getUID() +'/Payment/' +'/bank/' + '/account_name' ] = this.account_name;
    updates['/user/'+this.user.getUID() +'/Payment/' +'/bank/' + '/account_number' ] = this.account_number;

    alert('[บันทึกแล้ว]')
    firebase.database().ref().update(updates);
    this.router.navigate(['/shops-menu/shop-payment'])
    
    
  }
  


}
