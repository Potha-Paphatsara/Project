import { Component, OnInit } from '@angular/core';
import { CartService } from './../../services/cart.service';
import { UserService } from './../../services/user.service';
import { CommonService } from './../../services/common.service';
import { Router } from '@angular/router';
import { ModalController, NavParams } from '@ionic/angular';
import { CartDeliveryAddressFormPage } from '../cart-delivery-address-form/cart-delivery-address-form.page';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { AngularFirestore } from 'angularfire2/firestore';
import { AlertController } from '@ionic/angular';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'app-cart-delivery-address',
  templateUrl: './cart-delivery-address.page.html',
  styleUrls: ['./cart-delivery-address.page.scss'],
})
export class CartDeliveryAddressPage implements OnInit {
  name:string = ""
  email:string = ""
  public addressData: any;
  public cartData: any;
  houseNumber: string = ""
	streetName: string = ""
  district: string = ""
	city: string = ""
  mobileNumber: string = ""
  countries: any[]
  sum=0

  constructor(
    public cartService: CartService,
    public userSerices: UserService,
    public commonServices:CommonService,
    public modalController:ModalController,
    public router: Router,
    public database: AngularFireDatabase,
		public afAuth: AngularFireAuth,
		public afstore: AngularFirestore,
		public user: UserService,
		public alertController: AlertController,
    private motalController:ModalController
  ) {
    const { name } = this

    try{
   
      
  const personRef: firebase.database.Reference = firebase.database().ref('/user/'+this.user.getUID());
    personRef.on('value', personSnapshot => {
      
      this.email = personSnapshot.val().Email;
      this.name = personSnapshot.val().Name;
      

    });
    
  }catch{
    alert ("กรุณาเข้าสู่ระบบก่อน")
    this.router.navigate(['/auth-login'])
    
  }


    const personRef: firebase.database.Reference = firebase.database().ref('/user/'+this.user.getUID()+'/Address/');
    personRef.on('value', personSnapshot => {
      
      this.houseNumber = personSnapshot.val().houseNumber;
      this.streetName = personSnapshot.val().streetName;
      this.district = personSnapshot.val().district;
      this.city=personSnapshot.val().city;
      this.mobileNumber=personSnapshot.val().mobileNumber;

    });
    

  }

  ngOnInit() {
    this.cartData = this.cartService.getCart();

  
  }

  
  


 /* moveNext() {
    if (this.cartData.deliveryAddress == '') {
      this.commonServices.showAlert("Select delivery address to proceed.");
    } else {
      this.cartData.discount.amount = '2.50';
      this.router.navigateByUrl('/cart-delivery-options');
    }
  }*/

  async addAddress() {
   
    const modal = await this.modalController.create({
      component: CartDeliveryAddressFormPage
    });
     modal.present();
  }

  async editAddress() {
    
    const modal = await this.modalController.create({
      component: CartDeliveryAddressFormPage,
    });
     modal.present();
  }

  moveNext(){
    this.router.navigateByUrl('/cart-payment');
}





}
