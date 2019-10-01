import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';
//import firebase from '../../firebase';



@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.page.html',
  styleUrls: ['./auth-login.page.scss'],
})
export class AuthLoginPage implements OnInit {

  emailface: string = ""
	Email: string = ""
	password: string = ""

  constructor(
    public database: AngularFireDatabase,
    public afAuth: AngularFireAuth, 
    public user: UserService, 
    public router: Router) { }

  ngOnInit() {
  }

  async login() {
		
		const { Email, password } = this

		if (Email==""||password==""){alert("กรุณาใส่ข้อมูลให้ครบ");}else{
		try {
			// kind of a hack. 
			const res = await this.afAuth.auth.signInWithEmailAndPassword(Email , password)
			
			if(res.user) {
        alert("เข้าสู่ระบบเรียบร้อย")
        this.router.navigate(['/menu/dashboard'])
				this.user.setUser({
					Email:Email,
					uid: res.user.uid
				})
        this.setpropertyuser(this.user.getUID());
        
			
			}
		}
		catch(err) {
			console.dir(err)
			alert("Email หรือ Password ไม่ถูก")
		}
	}
  }
  gotopage(){
    this.router.navigate(['/tab-account'])
  }

  async loginface()
  {
    
    let provider = new firebase.auth.FacebookAuthProvider();
    try
    {
      
     /*  */
    const res = await firebase.auth().signInWithPopup(provider)
    this.user.result = res;

      this.emailface = res.user.email;
      const { emailface } = this
      //this.router.navigate(['/profile'])
      console.log('uid: '+res.user.uid,'Name : '+res.user.displayName,'email : '+res.user.email);
      alert('Successful login');
      this.database.list("/user/"+res.user.uid+"/").set("Name",res.user.displayName)
			this.database.list("/user/"+res.user.uid+"/").set("Email",res.user.email)
      this.router.navigate(['/menu/dashboard'])
      

      if(res.user) {
        this.router.navigate(['/menu/dashboard'])
				this.user.setUser({
					Email:emailface,
					uid: res.user.uid
				})
        this.setpropertyuser(this.user.getUID());
        
			
			}
  
    }catch(error) 
    {
      //Do something when error
      console.dir(error)
			if(error.code === "auth/user-not-found") {

				
			}
    }
    

  }
  setpropertyuser(uid:string){

  }
  gotoprofile(){
    this.router.navigate(['/tab-account'])
    alert(JSON.stringify(this.user.result))
  }
  logoutFacebook() {
    delete this.user.result;
    firebase.auth().signOut()
    .then(() => {
      console.log('singout successful')
      alert('Successful singout')
      
      
    },(error) => {
      console.log('singout failed')
      alert('singout failed')
    });
  }
  


}
