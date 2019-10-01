import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth'
import { AngularFirestore } from 'angularfire2/firestore'
import { UserService } from '../../services/user.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database'

@Component({
  selector: 'app-shop-register',
  templateUrl: './shop-register.page.html',
  styleUrls: ['./shop-register.page.scss'],
})
export class ShopRegisterPage implements OnInit {

  Shop_Name: string = ""
	Shop_Picture: string = ""
  Shop_Address: string = ""
  transfer_money: string = ""
  Account_Name: string = ""
  restaurant_type: string = ""
  Account_number: string = ""
  Collect_money: string = ""
	Shop_Telephone_Number: string = ""
  countries: any[]
  data_shop=[]


  houseNumber:string=""
  streetName:string=''
  district:string=''
  city:string=""
  mobileNumber=0

  constructor(
    public database: AngularFireDatabase,
		public afAuth: AngularFireAuth,
		public afstore: AngularFirestore,
		public user: UserService,
		public alertController: AlertController,
		public router: Router
  ) { 

    const personRefs: firebase.database.Reference = firebase.database().ref('/shop/'+this.user.getUID());
    personRefs.on('value', personSnapshot => {
    

      this.Shop_Name = personSnapshot.val().Shop_Name;
      this.Shop_Picture = personSnapshot.val().Shop_Picture;
      
    this.data_shop.push({Shop_Name:this.Shop_Name,Shop_Picture:this.Shop_Picture})	
    
    
    
      
      
           
      console.log(this.data_shop)
         
    });
    try{
      var uid = this.user.getUID()
    }catch{
      alert ("กรุณาเข้าสู่ระบบ")
      this.router.navigate(['/auth-login'])
    }
  }

  ngOnInit() {
  }

  async presentAlert(title: string, content: string) {
		const alert = await this.alertController.create({
			header: title,
			message: content,
			buttons: ['OK']
		})

		await alert.present()
	}

	async register() {
		const { Shop_Picture, Shop_Name, restaurant_type, } = this

		if( Shop_Name == "" ||restaurant_type==''){
			return alert("กรุณากรอกข้อมูลให้ครบ");
		}


			try {

        this.presentAlert('Success', 'You are registered!')
        


        this.database.list("/shop/"+this.user.getUID()).set("Shop_Name",Shop_Name)
        this.database.list("/shop/"+this.user.getUID()).set("restaurant_type",restaurant_type)
        this.database.list("/shop/"+this.user.getUID()).set("Shop_Picture",this.Shop_Picture)
        this.database.list("/shop/"+this.user.getUID()+'/Address').set("houseNumber","this.houseNumber")
        this.database.list("/shop/"+this.user.getUID()+'/Address').set("Shop_Address","this.streetName")
        this.database.list("/shop/"+this.user.getUID()+'/Address').set("Shop_Address","this.district")
        this.database.list("/shop/"+this.user.getUID()+'/Address').set("Shop_Address","this.city")
        this.database.list("/shop/"+this.user.getUID()+'/Address').set("Shop_Address","this.mobileNumber")
        console.log( this.database)
        this.router.navigate(['./shop-menu/shop'])
			
		} catch(error) {
			  console.log(error.code)
		}
	}

}
