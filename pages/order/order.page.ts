import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database'
@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  passedID=null;
  data_order:string=''
  order_new=[]
  constructor(
    public activedRoute:ActivatedRoute, 
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
        var menu = this.data_order[keys[i]][keys_shop[j]].menu.replace("[","")
        menu=menu.replace("]","")
        var menu_array = []
        var string = menu.split(',');
        for (var l =0;l<string.length;l++){
            var menus = string[l].replace('"',"")
            menus = menus.replace('"',"")
            menus=menus.replace("{","")
            menus=menus.replace("}","")
            menu_array.push(menus)
          }
      console.log(menu_array)
    
 
       
       
       this.order_new.push({
         "Key_shop":keys[i],
         "Key_order":keys_shop[j],
         "Address":this.data_order[keys[i]][keys_shop[j]].Address,
         "UID_customer":this.data_order[keys[i]][keys_shop[j]].UID_customer,
         "menu":menu_array,
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
    this.passedID=this.activedRoute.snapshot.paramMap.get('Key_order')
    console.log(this.passedID)
  }

}
