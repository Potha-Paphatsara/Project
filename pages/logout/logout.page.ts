import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { AngularFirestore } from 'angularfire2/firestore';
import { UserService } from '../../services/user.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

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

}
