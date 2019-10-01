import { Injectable } from '@angular/core'
import { AngularFireAuth } from 'angularfire2/auth'
import { first } from 'rxjs/operators'
import { auth } from 'firebase/app'
import { AngularFireStorage,AngularFireUploadTask} from 'angularfire2/storage'
import { Camera, CameraOptions} from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { DomSanitizer } from '@angular/platform-browser';
import * as firebase from 'firebase';
import { AngularFirestore } from 'angularfire2/firestore'
import { Router } from '@angular/router';



interface user {
	Email: string,
	uid: string
}

@Injectable()
export class UserService {
	total=0
	sum=0
	private user: user
	public result:any
	public EdtiPostKey:string
	public cartItemsTotal:any;


  
	constructor(
		private afAuth: AngularFireAuth,
		private camera: Camera,
		private storage:AngularFireStorage,
		private file:File,
		public dms: DomSanitizer,
		public afstore: AngularFirestore,
		public router: Router,
		) {

			

	}

	setUser(user: user) {
		this.user = user
	}

	getUsername(): string {
		return this.user.Email
	}

	reAuth(Email: string, password: string) {
		return this.afAuth.auth.currentUser.reauthenticateWithCredential(auth.EmailAuthProvider.credential(Email, password))
	}

	updatePassword(newpassword: string) {
		return this.afAuth.auth.currentUser.updatePassword(newpassword)
	}

	updateEmail(newemail: string) {
		return this.afAuth.auth.currentUser.updateEmail(newemail)
	}

	async isAuthenticated() {
		if(this.user) return true

		const user = await this.afAuth.authState.pipe(first()).toPromise()

		if(user) {
			this.setUser({
				Email: user.email.split('@')[0],
				uid: user.uid
			})

			return true
		}
		return false
	}

	getUID(): string {
		if(!this.user){
			this.setUser({
				Email:'',
				uid: '' 
			})	
			
		}
		return this.user.uid
	}


setUID(){
	this.user.uid=null

}





	postdata=[]
	

	  data=[]
	async Take_A_Photo(){
		const options: CameraOptions = {
		  quality : 50,
		  targetHeight : 600,
		  targetWidth: 600,
		  destinationType: this.camera.DestinationType.FILE_URI,
		  encodingType: this.camera.EncodingType.JPEG,
		  mediaType: this.camera.MediaType.PICTURE,
		  correctOrientation: true
		  }
	
		await this.camera.getPicture(options).then((imageData) => {
		 var key ="string";
		  var number = Math.random() * 10000000000000000;
		  var numberss=number.toString()
		  var keys ="number";
		  var objs = {};
			var array = new Object()
			this.data.push("data:image/jpeg;base64,"+ imageData)
			this.data.push (numberss)
			//console.log(array['string']) //base64
		  
		  })
		  return this.data
	
	  
		}


//----------------เช็คเปิดร้านหรือยัง----------------------
	async have_shops(){ 
		var data_shop=[]
		const personRef: firebase.database.Reference = firebase.database().ref('/shop/'+this.getUID());
       await personRef.on('value', personSnapshot => {
          
		try{
		
			var Shop_Name = personSnapshot.val().Shop_Name;
			var Shop_Address = personSnapshot.val().Shop_Address;
			var Shop_Telephone_Number = personSnapshot.val().Shop_Telephone_Number;
			
		data_shop.push({Shop_Name:Shop_Name,Shop_Address:Shop_Address,Shop_Telephone_Number:Shop_Telephone_Number})	
		
		
	}catch{
			alert ("กรุณาลงทะเบียนร้าน")
			this.router.navigate(['/shop-registration'])
			
      	 	}
			
			   
		});
		console.log(data_shop)
		return data_shop;
		
		}

//------------------ตะกร้า-----------------------
		public cart = [];

		addProduct(product) {
			this.cart.push(product);
		  }

		getProducts() {
		  return this.data;
		}
		getCart() {
			console.log(this.cart)
		  return this.cart;
		}

		setproduct(allproduct){
			this.cart = allproduct
		}
		


//--------------ลบสินค้าออกตระกร้า-----------
		removeItem(item){
			//console.log(this.cart)
			for( var i = 0; i < this.cart.length; i++){
				if ( this.cart[i].keyofpost === item.keyofpost) {
			   //console.log(item)//this.selectedItems.splice(i, 1);
			   this.total = this.total - this.cart[i].price
			   this.sum = this.sum--
			   this.cart.splice(i,1)
			   break;
				}
				
			 }
		 
		   }

		   addItem(item){
			//console.log(this.cart)
			for( var i = 0; i < this.cart.length; i++){
				if ( this.cart[i].keyofpost === item.keyofpost) {
					this.addProduct(item)
			   break;
				}
				
			 }
		 
		   }

		   removeCartItem(item){
			for( var i = 0; i < this.cart.length; i++){
				if ( this.cart[i].keyofpost === item.keyofpost) {
			   //console.log(item)//this.selectedItems.splice(i, 1);
			   this.total = this.total - this.cart[i].price
			   this.cart.splice(i,1)
			   break;
				}
				
			 }
	}

}