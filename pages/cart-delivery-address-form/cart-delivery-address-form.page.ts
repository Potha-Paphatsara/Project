import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { UserService } from './../../services/user.service';
import { AngularFireAuth } from 'angularfire2/auth'
import * as firebase from 'firebase';
import { AngularFirestore } from 'angularfire2/firestore'
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database'



@Component({
  selector: 'app-cart-delivery-address-form',
  templateUrl: './cart-delivery-address-form.page.html',
  styleUrls: ['./cart-delivery-address-form.page.scss'],
})
export class CartDeliveryAddressFormPage implements OnInit {

  houseNumber: string = ""
	streetName: string = ""
  district: string = ""
	city: string = ""
  mobileNumber: string = ""
  countries: any[]
  
  constructor(
    public database: AngularFireDatabase,
		public afAuth: AngularFireAuth,
		public afstore: AngularFirestore,
		public user: UserService,
		public alertController: AlertController,
		public router: Router,
    private motalController:ModalController
		
    ){
      const personRef: firebase.database.Reference = firebase.database().ref('/user/'+this.user.getUID()+'/Address');
            personRef.on('value', personSnapshot => {
              
              this.houseNumber = personSnapshot.val().houseNumber;
              this.streetName = personSnapshot.val().streetName;
              this.district = personSnapshot.val().district;
              this.city=personSnapshot.val().city;
              this.mobileNumber=personSnapshot.val().mobileNumber;
    
            });
    }

  ngOnInit() {}

  
  writeNewPost() {
  
    var updates = {};
    updates['/user/'+this.user.getUID() +'/Address/' + '/houseNumber' ] = this.houseNumber;
    updates['/user/'+this.user.getUID() +'/Address/' + '/streetName' ] = this.streetName;
    updates['/user/'+this.user.getUID() +'/Address/' + '/district' ] = this.district;
    updates['/user/'+this.user.getUID() +'/Address/' + '/city' ] = this.city;
    updates['/user/'+this.user.getUID() +'/Address/' + '/mobileNumber' ] = this.mobileNumber;

    alert('[บันทึกแล้ว]')
    firebase.database().ref().update(updates);
    this.motalController.dismiss();
    
  }
  



  close(){
     this.motalController.dismiss();
  }

}
