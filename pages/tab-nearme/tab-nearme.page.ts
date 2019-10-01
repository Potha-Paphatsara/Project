import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { UserService } from '../../services/user.service';
import { AlertController,NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-tab-nearme',
  templateUrl: './tab-nearme.page.html',
  styleUrls: ['./tab-nearme.page.scss'],
})
export class TabNearmePage implements OnInit {
  Allshops_new=[]
  Allshops=[]
  cart=[]
  public data:any;
  public bannerData:any;
  public _isSkeleton:boolean=true;
  public isVisibaleCart = true;
  
  
  constructor(
    public router: Router,
    public alertController: AlertController,
    public user: UserService,
    public navCtrl: NavController,
    public productService:ProductsService,

    ) {

      const personRef: firebase.database.Reference = firebase.database().ref('/shop/');
      personRef.on('value', personSnapshot => {
        var data=[]
        personSnapshot.forEach(function (item){
          var itemVal = item.val();
          data.push(itemVal)
  
  
          })
          this.Allshops = personSnapshot.val()
            console.log(this.Allshops)
            var keys = Object.keys(this.Allshops)
            for(var i=0 ; i<keys.length;i++){
  
              console.log(this.Allshops[keys[i]].Shop_Picture)
                      

  
  
                
              this.Allshops_new.push({

              "Picture":this.Allshops[keys[i]].Shop_Picture,
              "Name":this.Allshops[keys[i]].Shop_Name,
              "Address":this.Allshops[keys[i]].Shop_Address,
              "Telephone":this.Allshops[keys[i]].Shop_Telephone_Number,
              "UID":keys[i]
              
            })


              }

        


 
        }); 
    
   }

  ngOnInit() {
    this.cart = this.user.getCart();
    this.bannerData = [
      {
        banner_img:"https://hybridtemplates.com/demos/food-point/images/banner_02.png",
        addon_title:"Orgenic Vegetable Set",
        addon_sub_title:"Roma Tomatoes, Red Onions, Kalamata Olives...",
        rating:"4.8",
        review:"545",
        offer:"45% of | Use Coupon EATME"
      },
      {
        banner_img:"https://hybridtemplates.com/demos/food-point/images/banner_01.png",
        addon_title:"Orgenic Vegetable Set",
        addon_sub_title:"Roma Tomatoes, Red Onions, Kalamata Olives...",
        rating:"3.2",
        review:"559",
        offer:"40% of | Use Coupon EATME"
      },
      {
        banner_img:"https://hybridtemplates.com/demos/food-point/images/banner_03.png",
        addon_title:"Orgenic Vegetable Set",
        addon_sub_title:"Roma Tomatoes, Red Onions, Kalamata Olives...",
        rating:"5.0",
        review:"854",
        offer:"30% of | Use Coupon EATME"
      },
      {
        banner_img:"https://hybridtemplates.com/demos/food-point/images/banner_04.png",
        addon_title:"Orgenic Vegetable Set",
        addon_sub_title:"Roma Tomatoes, Red Onions, Kalamata Olives...",
        rating:"4.8",
        review:"987",
        offer:"50% of | Use Coupon EATME"
      },
      {
        banner_img:"https://hybridtemplates.com/demos/food-point/images/banner_05.png",
        addon_title:"Orgenic Vegetable Set",
        addon_sub_title:"Roma Tomatoes, Red Onions, Kalamata Olives...",
        rating:"4.9",
        review:"999",
        offer:"35% of | Use Coupon EATME"
      }
    ];

    


    this.productService.getCategories()
    .then(res => {
        let result:any = res;
       // console.log(result);
        this.data = result.data;
        setTimeout(()=>{
          this._isSkeleton = false;
        },3000);
    });

    


  }

}
