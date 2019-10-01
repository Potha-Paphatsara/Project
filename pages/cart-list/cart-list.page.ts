import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from './../../services/cart.service';
import { Events } from '@ionic/angular';
import { UserService } from '../../services/user.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.page.html',
  styleUrls: ['./cart-list.page.scss'],
})
export class CartListPage implements OnInit {

  public cartData:any;
  
  selectedItems = [];
  post=[]
  total = 0;
  shopdetail = []
  data1=[]
  sum=0

  constructor(
      public cartService:CartService,
      public router:Router,
      private ev:Events,
      public user: UserService

      ) { 

      }

  ngOnInit() {
    this.calcart()
   }

   async calcart(){
    let items = await this.user.getCart();
    let selected = {};
    let shop_group = {};
    const personRef: firebase.database.Reference = firebase.database().ref('/post/')
    personRef.on('value', personSnapshot => {
      //console.log(personSnapshot.val().Shop_Name)
      var data = personSnapshot.val()

      this.shopdetail = data
      var keys = Object.keys(data)

      for (let obj of items) {
        
        for(let keydata of keys){
          
          if(obj.UID == keydata){
            if (selected[obj.keyofpost]) {
              selected[obj.keyofpost].count++;
              
              } else {
              
              selected[obj.keyofpost] = {...obj, count: 1,shop_name:data[keydata].Shop_Name};
                console.log(data)
              }
            
          }
          
          
          
        }


      }

      this.selectedItems = Object.keys(selected).map(key => selected[key])
      this.total = this.selectedItems.reduce((a, b) => a + (b.count * b.price), 0);     
      
      

      for(var i=0;i<this.selectedItems.length;i++){

        this.sum = this.sum+this.selectedItems[i].count

       
      
      }
      console.log(this.selectedItems)
    })    
    return this.selectedItems

      
  }
  

//------------เพิ่ม+ลบitemออกทีละอัน-------------
  RemoveOneItem(item){
    this.user.removeItem(item)
    for( var i = 0; i < this.selectedItems.length; i++){ 
       if ( this.selectedItems[i] === item) {
          this.total = this.total - this.selectedItems[i].price
          if(this.selectedItems[i].count > 1){
            this.selectedItems[i].count--;
            this.sum--
          } else{
            this.sum--
              this.selectedItems.splice(i, 1);
            }
        }  
    }
  }


  addItem(item){
    this.user.addItem(item)
    for( var i = 0; i < this.selectedItems.length; i++){ 
      if ( this.selectedItems[i] === item) {
        var b=this.selectedItems[i].price;
        this.total=this.total+parseInt(b);
        if(this.selectedItems[i].count > 1){
          this.selectedItems[i].count++;
          this.sum++
        } 
      } 
            
    }
  }

  /*removeCartItem(item){
    this.user.removeCartItem(item)
    for( var i = 0; i < this.selectedItems.length; i++){ 
     
        if(this.selectedItems[i].keyofpost===item.keyofpost){
          this.total = this.total - (this.selectedItems[i].price*this.selectedItems[i].count)

          console.log(this.selectedItems[i])
        this.selectedItems.splice(i, 1);
    }  
  }

 
  }*/

  moveNext(){
    if( !this.user.getUID()){
      alert ("กรุณาเข้าสู่ระบบก่อน")
      this.router.navigate(['/auth-login'])
      return
    }else{
      this.router.navigate(['/cart-order'])
      }
    } 
  
    
  
  
}
