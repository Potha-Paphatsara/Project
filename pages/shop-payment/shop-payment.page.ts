import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth'
import { AngularFirestore } from 'angularfire2/firestore'
import { UserService } from '../../services/user.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database'

@Component({
  selector: 'app-shop-payment',
  templateUrl: './shop-payment.page.html',
  styleUrls: ['./shop-payment.page.scss'],
})
export class ShopPaymentPage implements OnInit {



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
		public router: Router
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



}
