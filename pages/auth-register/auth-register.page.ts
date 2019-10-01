import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth'
import { AngularFirestore } from 'angularfire2/firestore'
import { UserService } from '../../services/user.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database'

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.page.html',
  styleUrls: ['./auth-register.page.scss'],
})
export class AuthRegisterPage implements OnInit {

	Name: string = ""
	Address: string = ""
	Telephone_Number: string = ""
	Email: string = ""
	Password: string = ""
	Confirm_Password: string = ""
	countries: any[]

	constructor(
		public database: AngularFireDatabase,
		public afAuth: AngularFireAuth,
		public afstore: AngularFirestore,
		public user: UserService,
		public alertController: AlertController,
		public router: Router
		
		) {

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
		const { Name, Email, Password, Confirm_Password } = this

		if(Name == ""){
			return alert("กรุณากรอกข้อมูลให้ครบ");
		}
		
		if(Password !== Confirm_Password) {
			alert("Passwords don't match")
			return console.error("Passwords don't match")
		}

		try {
			const res = await this.afAuth.auth.createUserWithEmailAndPassword(Email, Password)

			this.afstore.doc(`users/${res.user.uid}`).set({
				Email
			})

			this.user.setUser({
				Email,
				uid: res.user.uid
			})

			alert("You are registered!")
			this.presentAlert('Success', 'You are registered!')
			this.database.list("/user/"+res.user.uid+"/").set("Name",Name)
			this.database.list("/user/"+res.user.uid+"/").set("Email",Email)
			
			this.router.navigate(['/auth-login'])
			

		} catch(error) {
			
			if(error.code == "auth/email-already-in-use"){
				alert("E-mail นี้เคยถูกสมัครไปแล้ว")
			}else{
				alert("การสมัครผิดพลาดกรุณาลองใหม่")
			}
			console.log(error.code)
		}
	}

}
