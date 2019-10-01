import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { CartService } from './../../services/cart.service';
import { Events } from '@ionic/angular';



import * as firebase from 'firebase';
import { UserService } from '../../services/user.service';
import { AlertController,NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {
  passedID=null;
  shops=[]
  Allshops=[]
  Allshops_new=[]
  Allpost=[]
  Allpost_new=[]
  AllPosts_new=[]
  Allshops_newData=[]

  cart = [];
  items = [];

  
  public data:any=[];
  public categoryData:any;
  public subCategroyData:any;
  public selectedCatId:number;
  public _isSkeleton:boolean = true;
  public _hasRecords:boolean=true;
  constructor(
    public user: UserService,
    public productService:ProductsService,
    public cartService:CartService,
    public activedRoute:ActivatedRoute, 
    private ev:Events
    ) {

      this.ev.subscribe('reset-product-qty', (name) => {
          this.cartService.restCartProducts(this.data);
      }); 





      //-------------------เช็คshop-----------------
      const personRef: firebase.database.Reference = firebase.database().ref('/shop/');
      personRef.on('value', personSnapshot => {
        var data=[]
        personSnapshot.forEach(function (item){
          var itemVal = item.val();
          data.push(itemVal)
          })
        this.Allshops = personSnapshot.val()
        var keys = Object.keys(this.Allshops)
        for(var i=0 ; i<keys.length;i++){
          this.Allshops_new.push({
            "Name":this.Allshops[keys[i]].Shop_Name,
            "Address":this.Allshops[keys[i]].Shop_Address,
            "Telephone":this.Allshops[keys[i]].Shop_Telephone_Number,
            "UID":keys[i]
            })
          }
            //console.log(this.Allshops_new)
        });

      //-----------------เช็คpost------------------
      const personRef_post: firebase.database.Reference = firebase.database().ref('/post/');
      personRef_post.on('value', personSnapshot_post => {
        var data=[]
        personSnapshot_post.forEach(function (item){
          var itemVal = item.val();
          data.push(itemVal)
          })
        this.Allpost = personSnapshot_post.val()
        var keys = Object.keys(this.Allpost)
        for(var j=0 ; j<keys.length;j++){
          var key_post = Object.keys(this.Allpost[keys[j]])
 
            for(var k=0;k<key_post.length;k++){
              var image = this.Allpost[keys[j]][key_post[k]].Picture.replace("[","")
              image = image.replace("]","")
              var image_array = []
              var string = image.split(',');
                for (var l =0;l<string.length;l++){
                    var images = string[l].replace('"',"")
                    images = images.replace('"',"")
                    image_array.push(images)
                  }
              this.AllPosts_new.push({
                "Picture":image_array,
                "Status":this.Allpost[keys[j]][key_post[k]].Status,
                "message":this.Allpost[keys[j]][key_post[k]].message,
                "price":this.Allpost[keys[j]][key_post[k]].price,
                "number_food":this.Allpost[keys[j]][key_post[k]].number_food,
                "name_food":this.Allpost[keys[j]][key_post[k]].name_food,
                "UID":keys[j],"keyofpost":key_post[k],
                })
                
              } 
              
          } 

          
        for(var i=0;i<this.Allshops_new.length;i++){
          var alldata=[]
          for(var j=0;j<this.AllPosts_new.length;j++){
            if (this.Allshops_new[i].UID==this.AllPosts_new[j].UID){
              alldata.push(this.AllPosts_new[j])
            }

          }
          this.Allshops_newData.push({
            "Name":this.Allshops_new[i].Name,
            "Shop_Address":this.Allshops_new[i].Address,
            "tel":this.Allshops_new[i].Telephone,
            "UID":this.Allshops_new[i].UID,
            "post":alldata
           
          })
          console.log(this.Allshops_newData[i]) 
        }



        }); 

       
      
  }


  ngOnInit() {
    //-----------รับUID--------------
    this.passedID=this.activedRoute.snapshot.paramMap.get('UID')

//------------------cart-----------------
    this.items = this.user.getProducts();
    this.cart = this.user.getCart();
    //----------Category------------------
        let cat_id = this.activedRoute.snapshot.paramMap.get('cat_id');
        //console.log('cat_id ',cat_id);

        this.productService.getCategories()
          .then(res => {
              let result:any = res;
              //console.log('result',result);
        
            this.categoryData = result.data.find(item => item.id === cat_id);
            this.subCategroyData =  this.categoryData.sub_cat;
            if(this.subCategroyData.length){
                this.selectedCatId = this.subCategroyData[0].id;
                console.log('sub cat id ',this.selectedCatId);

             // this.showProductByCatId(this.subCategroyData[0].id);
            }
            //console.log('this.categoryData ',this.categoryData);
        });
    
    //--------Product--------------------
        this.productService.getProducts()
        .then(res => {
            let result:any = res;
            //this.data = result.data;
            //----------------------------------
            this.data = result.data.filter(item => {
                      item.display = {};
                      if(item.rec_attr.length){
                        item.display.attr_title   = item.rec_attr[0].rec_title;
                        item.display.price        = item.rec_attr[0].rec_attr_price;
                        item.display.sale_price   = item.rec_attr[0].rec_attr_sale_price;
                      }else{
                        item.display.price       = item.rec_price;
                        item.display.sale_price  = item.rec_sale_price;
                      }
                      item.display.indx     = 0;
                      item.display.qty      = 0;

              return item;
            });
            //----------------------------------
            setTimeout(()=>{
                this._isSkeleton = false;
                if(!this.data.length) this._hasRecords = false; else  this._hasRecords = true;
            },2000);
      });
    //--------------------------------
  }

  showProductByCatId(cat_id:number){
     this.selectedCatId = cat_id;

     let tmpData:any = this.data.filter(item => {
        return item.rec_cat_ids.indexOf(cat_id) > -1
     });

     if(!tmpData.length)  this._hasRecords = false; else  this._hasRecords = true;
     
     console.log('tmpData ',tmpData);
  }


  addToCart(product) {
    var cart = this.user.getCart()
    console.log(product)
    if(cart.length==0){

      this.user.addProduct(product)
    }else{  
        var isfalse
        for(var i=0;i<cart.length;i++){
          if(cart[i].UID !=product.UID){
            alert("กรุณาทำการสั่งซื้อสินค้าที่อยู่ในตระกร้า ก่อนเพิ่มสินค้าของร้านอื่นค่ะ")
            isfalse =true
            break
          }
        }
        if(!isfalse){
          this.user.addProduct(product)
        }
    }
  }
}
