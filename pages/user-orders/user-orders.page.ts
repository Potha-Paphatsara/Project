import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database'
@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.page.html',
  styleUrls: ['./user-orders.page.scss'],
})
export class UserOrdersPage implements OnInit {
  data_order:string=''
  order_new=[]
  
  constructor(
    public user: UserService,
    public database: AngularFireDatabase,
  ) { 
    //-------------Order---------------
    
   const personRefshop: firebase.database.Reference = firebase.database().ref('/order-shop/');
   personRefshop.on('value', personSnapshot => {
   
   this.data_order = personSnapshot.val()

    var keys = Object.keys(this.data_order)
  for(var i=0; i<keys.length;i++){
    var keys_shop=Object.keys(this.data_order[keys[i]])
    for (var j=0;j<keys_shop.length;j++){
      //console.log(this.data_order[keys[i]][keys_shop[j]].payment)
      var keys_payment=Object.keys(this.data_order[keys[i]][keys_shop[j]].payment)

     
      
        console.log(this.data_order[keys[i]][keys_shop[j]].payment.payment_type)


      
      
      this.order_new.push({
        "Key_shop":keys[i],
        "Key_order":keys_shop[j],
        "Address":this.data_order[keys[i]][keys_shop[j]].Address,
        "UID_customer":this.data_order[keys[i]][keys_shop[j]].UID_customer,
        "menu":this.data_order[keys[i]][keys_shop[j]].menu,
        "sum_total":this.data_order[keys[i]][keys_shop[j]].sum_total,
        "text":this.data_order[keys[i]][keys_shop[j]].text,
        "Status":this.data_order[keys[i]][keys_shop[j]].Status_1,
        "payment":this.data_order[keys[i]][keys_shop[j]].payment.payment_type
        

      })


 
     
    }
    
  }
  //console.log( this.order_new)
  
  
   
   });
    
  }

  ngOnInit() {

  }



}
