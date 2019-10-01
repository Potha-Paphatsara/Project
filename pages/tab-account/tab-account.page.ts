import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { AngularFirestore } from 'angularfire2/firestore';
import { UserService } from '../../services/user.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-tab-account',
  templateUrl: './tab-account.page.html',
  styleUrls: ['./tab-account.page.scss'],
})
export class TabAccountPage implements OnInit {

  public myPerson = {};
  dataall =[];
  foundation: any;
  nav: any;
  ionViewDidLoad() {

  }
  constructor(
    public database: AngularFireDatabase,
		public afAuth: AngularFireAuth,
		public afstore: AngularFirestore,
		public user: UserService,
		public alertController: AlertController,
    public router: Router
  ) {
    



  }


  public newMethod(snapshot: firebase.database.DataSnapshot) {
    console.log(snapshot.val().Email);
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
  //edit(){this.router.navigate(['/edit-profile'])}

  MyShop(){
    this.router.navigate(['./shop-menu/shop'])
  }

  logout(){
    firebase.auth().signOut()
    this.user.setUID()
    this.router.navigate(['/auth-login'])
    
        console.log("hhhhhhhhhhhh")
  }
  
}
