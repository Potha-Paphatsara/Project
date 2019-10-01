import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'
import * as firebase from 'firebase';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.page.html',
  styleUrls: ['./post-form.page.scss'],
})
export class PostFormPage implements OnInit {
  Status:string=""
  price:string=""
  message:string=""
  name_food:string=""
  number_food:string=""
  constructor(
    public database: AngularFireDatabase,
    public user: UserService,
    public router: Router
  ) { 
    const personRef: firebase.database.Reference = firebase.database().ref('/post/'+this.user.getUID()+'/'+this.user.EdtiPostKey);
    personRef.on('value', personSnapshot => {
      
      this.Status = personSnapshot.val().Status;
      this.price = personSnapshot.val().price;
      this.message = personSnapshot.val().message;
      this.name_food=personSnapshot.val().name_food;
      this.number_food=personSnapshot.val().number_food;
  console.log(personSnapshot.val())
    });
  }

  ngOnInit() {
  }

  writeNewPost() {
  
    // Write the new post's data simultaneously in the posts list and the user's post list.
    var updates = {};
    updates['/post/'+this.user.getUID()+"/"+this.user.EdtiPostKey+ '/name_food' ] = this.name_food
    updates['/post/'+this.user.getUID()+"/"+this.user.EdtiPostKey+ '/number_food' ] =  this.number_food
    updates['/post/'+this.user.getUID()+"/"+this.user.EdtiPostKey+ '/price' ] = this.price
    updates['/post/'+this.user.getUID()+"/"+this.user.EdtiPostKey+ '/message' ] =this.message
    updates['/post/'+this.user.getUID()+"/"+this.user.EdtiPostKey+ '/Status' ] = this.Status
    updates['/post/'+this.user.getUID()+"/"+this.user.EdtiPostKey+ '/Picture' ] 

    alert('[บันทึกแล้ว]')
    this.router.navigate(['/shop'])
    firebase.database().ref().update(updates);
    
  }

}
