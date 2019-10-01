import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './../../services/cart.service';
import { Events } from '@ionic/angular';
import { UserService } from '../../services/user.service';
import * as firebase from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database'
@Component({
  selector: 'app-cart-order',
  templateUrl: './cart-order.page.html',
  styleUrls: ['./cart-order.page.scss'],
})
export class CartOrderPage implements OnInit {
  houseNumber: string = ""
	streetName: string = ""
  district: string = ""
	city: string = ""
  mobileNumber: string = ""

  bank:string=""
  account_name:string="" //------ชื่อบัญชี-------
  account_number:number  //------เลขที่บัญชี----------
  Cash_on_Delivery:boolean  //-----เก็บเงินปลายทาง---------
  PromptPay:number  //-----เลขพร้อมเพย์---------
  PromptPay_name:string=''   //-----ชื่อพร้อมเพย์---------

  Shop_Name:string=''

  public cartData:any;
  selectedItems = [];
  post=[]
  total = 0;
  shopdetail = []
  data1=[]
  sum=0
  UID_POST:string=''
  date: string=""
  text:string=''
  payment_type:string=''
  menu_total=0

  DATA=[]

  Status_1:string='กำลังดำเนินการ'
  constructor(
    public cartService:CartService,
    public router:Router,
    private ev:Events,
    public user: UserService,
    public database: AngularFireDatabase,) {



   }



  ngOnInit() {
  this.calcart()


}


async calcart(){
 let items = await this.user.getCart();
 let selected = {};

 const personRef: firebase.database.Reference = firebase.database().ref('/post/')
 personRef.on('value', personSnapshot => {
   //console.log(personSnapshot.val().Shop_Name)
   var data = personSnapshot.val()

   this.shopdetail = data
   var keys = Object.keys(data)

   for (let obj of items) {
    this.UID_POST=  obj.UID
     for(let keydata of keys){
       
       if(obj.UID == keydata){
         if (selected[obj.keyofpost]) {
           selected[obj.keyofpost].count++;
           
           } else {
           
           selected[obj.keyofpost] = {...obj, count: 1,shop_name:data[keydata].Shop_Name};
             
           }
         
       }
       
       
       
     }


   }

   this.selectedItems = Object.keys(selected).map(key => selected[key])
   this.total = this.selectedItems.reduce((a, b) => a + (b.count * b.price), 0);     
   
   

   for(var i=0;i<this.selectedItems.length;i++){


     this.sum = this.sum+this.selectedItems[i].count
  console.log("this.sum = ",this.sum)
    
   
   }
 })    
 //------Address-----------
 const personRefss: firebase.database.Reference = firebase.database().ref('/user/'+this.user.getUID()+'/Address/');
 personRefss.on('value', personSnapshot => {
   
   this.houseNumber = personSnapshot.val().houseNumber;
   this.streetName = personSnapshot.val().streetName;
   this.district = personSnapshot.val().district;
   this.city=personSnapshot.val().city;
   this.mobileNumber=personSnapshot.val().mobileNumber;
 });

   //-------------Payment---------------
  const personRefs: firebase.database.Reference = firebase.database().ref('/shop/'+this.UID_POST+'/Payment');
  personRefs.on('value', personSnapshot => {
  console.log(this.UID_POST)
  this.PromptPay = personSnapshot.val().PromptPay.PromptPay
  this.PromptPay_name = personSnapshot.val().PromptPay.PromptPay_name
  this.Cash_on_Delivery = personSnapshot.val().Cash_on_Delivery
  this.bank = personSnapshot.val().bank.bank
  this.account_name = personSnapshot.val().bank.account_name
  this.account_number = personSnapshot.val().bank.account_number
  });

   //-------------shop---------------
   const personRefshop: firebase.database.Reference = firebase.database().ref('/shop/'+this.UID_POST);
   personRefshop.on('value', personSnapshot => {
   console.log(personSnapshot.val())
   this.Shop_Name = personSnapshot.val().Shop_Name
   
   });


   
}


Save_Order(){
  alert(JSON.stringify(this.selectedItems))
  for(var i=0;i<this.selectedItems.length;i++){

    var count = this.selectedItems[i].count
    var price = this.selectedItems[i].price
    this.menu_total =(count*price)+this.menu_total
  
    this.DATA.push({"name_food":this.selectedItems[i].name_food,"count":count,"price":price,"total":count*price})

  }

  let now=new Date();
  let date = now.getDate()+"-"+now.getMonth()+"-"+now.getFullYear()+"_"+now.getHours()+"-"+now.getMinutes()+"-"+now.getSeconds()
  this.date = date
  this.database.list("/order-shop/"+this.UID_POST+"/"+date).set("UID_customer",this.user.getUID())
  this.database.list("/order-shop/"+this.UID_POST+"/"+date).set("text",this.text)
  this.database.list("/order-shop/"+this.UID_POST+"/"+date).set("menu",JSON.stringify(this.DATA).toString())
  this.database.list("/order-shop/"+this.UID_POST+"/"+date).set("sum_total",this.menu_total)
  this.database.list("/order-shop/"+this.UID_POST+"/"+date+'/Address/').set("houseNumber",this.houseNumber)
  this.database.list("/order-shop/"+this.UID_POST+"/"+date+'/Address/').set("streetName",this.streetName)
  this.database.list("/order-shop/"+this.UID_POST+"/"+date+'/Address/').set("district",this.district)
  this.database.list("/order-shop/"+this.UID_POST+"/"+date+'/Address/').set("city",this.city)
  this.database.list("/order-shop/"+this.UID_POST+"/"+date+'/Address/').set("mobileNumber",this.mobileNumber)
  this.database.list("/order-shop/"+this.UID_POST+"/"+date+'/payment/').set("payment_type",this.payment_type)
  this.database.list("/order-shop/"+this.UID_POST+"/"+date).set("Status_1",this.Status_1)
  
  this.router.navigate(['/menu/user-orders'])

}

}
