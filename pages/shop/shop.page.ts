import { Component, OnInit } from '@angular/core';
import { Router,RouterEvent } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth'
import * as firebase from 'firebase';
import { AngularFirestore } from 'angularfire2/firestore'
import { UserService } from '../../services/user.service';
import { AlertController } from '@ionic/angular';
import { AngularFireDatabase } from 'angularfire2/database'

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {
  Shop_Name:string = ""
  Shop_Address:string = ""
  Shop_Telephone_Number:string = ""
  public myPerson = {};
  dataall =[];
  datapost = []
  Image_URL = []
  Status:string=""
  message:string=""
  number_food:string=""
  name_food:string=""
  price:string=""
  data_shop=[]
  ionViewDidLoad(){}

  constructor(
    public database: AngularFireDatabase,
		public afAuth: AngularFireAuth,
		public afstore: AngularFirestore,
		public user: UserService,
		public alertController: AlertController,
    public router: Router) {
//------------ร้าน-----------------
      const personRefs: firebase.database.Reference = firebase.database().ref('/shop/'+this.user.getUID());
        personRefs.on('value', personSnapshot => {
          
		try{
		
			this.Shop_Name = personSnapshot.val().Shop_Name;
			this.Shop_Address = personSnapshot.val().Shop_Address;
			this.Shop_Telephone_Number = personSnapshot.val().Shop_Telephone_Number;
			
		this.data_shop.push({Shop_Name:this.Shop_Name,Shop_Address:this.Shop_Address,Shop_Telephone_Number:this.Shop_Telephone_Number})	
		
		
	}catch{
			alert ("กรุณาลงทะเบียนร้าน")
			this.router.navigate(['/shop-register'])
			
      	 	}
			console.log(this.Shop_Name)
			   
		});
//-------------------post------------------
      const personRef: firebase.database.Reference = firebase.database().ref('/post/'+this.user.getUID());
      personRef.on('value', personSnapshot => {
        var data = []
        personSnapshot.forEach(function (item){
          var itemVal = item.val();
          //var keys = Object.keys(item.key)
          var image = itemVal.Picture.replace("[","")
              image = image.replace("]","")
          var image_array = []
          var string = image.split(',');
          for (var i =0;i<string.length;i++){
            var images = string[i].replace('"',"")
                images = images.replace('"',"")
            image_array.push(images)
            }

          data.push({"key":item.key,"Picture":image_array,"Status":itemVal.Status,"message":itemVal.message,"price":itemVal.price,"name_food":itemVal.name_food,"number_food":itemVal.number_food})
          
        })
        this.datapost=data
        for(var i=0; i<this.datapost.length;i++){
          console.log(this.datapost[i].name_food)
        }
        
        
        
        
        }); 

     }

  ngOnInit() {
  }


  snapshotToArray(snapshot) {
    var returnArr = [];
    snapshot.forEach(function(childSnapshot) {
      var item = childSnapshot.val();
      item.key = childSnapshot.key;
       returnArr.push(item);
      });

      return returnArr;
    };

  editprofile(){this.router.navigate(['/edit-shop'])}
  post(){this.router.navigate(['/post'])}
  shopping(){this.router.navigate(['/home'])}
  shop_1(){this.router.navigate(['/shop-profile'])}
 

  /*DeletePots(key){
    let userRef = firebase.database().ref('/post/'+this.user.getUID()+"/"+key);
   
    userRef.remove()
  }*/

 /* EditPots(key){
    var updates = {};
    updates['/post/'+this.user.getUID()+"/"+key+ '/name_food' ] 
    updates['/post/'+this.user.getUID()+"/"+key+ '/number_food' ] 
    updates['/post/'+this.user.getUID()+"/"+key+ '/price' ] 
    updates['/post/'+this.user.getUID()+"/"+key+ '/message' ] 
    updates['/post/'+this.user.getUID()+"/"+key+ '/Status' ] 
    updates['/post/'+this.user.getUID()+"/"+key+ '/Picture' ] 

    alert('[บันทึกแล้ว]')
    this.router.navigate(['/profile'])
    firebase.database().ref().update(updates);

  }*/
  EditPots(key){
    this.user.EdtiPostKey = key
    this.router.navigate(['/post-form'])
  } 



  async DeletePots(key) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Delete',
          handler: () => {
            let userRef = firebase.database().ref('/post/'+this.user.getUID()+"/"+key);
            userRef.remove()
            console.log('Confirm Delete');
          }
        }
      ]
    });

    await alert.present();
  }



  Account(){
    this.router.navigate(['/shop-account'])
  }




}
