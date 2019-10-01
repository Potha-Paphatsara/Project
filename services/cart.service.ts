import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartData:any;
  public cartProducts:any;
  public isAvailable:boolean;
  private cartGrossTotal:any;
  public cartItemsTotal:any;
  public cartTotalAmount:any;

   constructor() {
    //console.log('Hello CartServicesProvider Provider');
    this.isAvailable    = true;
    this.cartGrossTotal = 0;
    this.cartProducts   = [];
    this.cartData = {
      products:[],
      subTotal:0,
      discount:{type:'',amount:0,code:''},
      deliveryAddress:'',
      deliveryMethod:{type:'',amount:0,code:''},
      taxes:{type:'',amount:0,code:''},
      paymentMethod:{type:'',code:''},
      grossTotal:0
    };
  }

  //-------------Add To Cart--------------------------------
   addToCart(OrProduct,index=undefined){
       this.isAvailable = true;
       let productInCart = false;
       let product = null;

       //---------------
          if(typeof(OrProduct.total)=='undefined'){
              if(typeof(OrProduct.purchaseQuantity)=='undefined')
              OrProduct.purchaseQuantity = 1;
              else OrProduct.purchaseQuantity++;

              if(OrProduct.rec_attr.length){
                OrProduct.rec_attr[index].qty++;
                OrProduct.display.attr_title   = OrProduct.rec_attr[index].rec_title;
                OrProduct.display.price        = OrProduct.rec_attr[index].rec_attr_price;
                OrProduct.display.sale_price   = OrProduct.rec_attr[index].rec_attr_sale_price;
                OrProduct.display.qty          = OrProduct.rec_attr[index].qty;
                OrProduct.display.indx        = index;
              }else{
                 OrProduct.display.price       = OrProduct.rec_price;
                 OrProduct.display.sale_price  = OrProduct.rec_sale_price;
                 OrProduct.display.qty         = OrProduct.purchaseQuantity;
              }

               product =  JSON.parse(JSON.stringify(OrProduct));
          }else{
               product =  OrProduct;
          }



       //---------------
       //product.rec_attr[index].qty++;

       // Assign sale price if available
       //console.log('product : ',product);
       //console.log('product.rec_attr[index].qty ',product.rec_attr[index].qty);
        product.attrline = [];
       if(typeof(index)!='undefined' && product.rec_attr.length){
         product.attrline.push({
            i:index,
           attr_pid:product.rec_attr[index].rec_pid,
           attr_id:product.rec_attr[index].rec_attr_id,
           attr_vid:product.rec_attr[index].rec_attr_vid});

          if(product.rec_attr[index].qty<1){
            product.rec_attr[index].qty++;
            //product.display.qty = product.rec_attr[index].qty;
          }
       }

         //product.rec_saleprice = product.display.price || product.display.sale_price;
         //product.rec_saleprice = this.formatTotal(parseFloat(product.rec_saleprice));


       this.cartData.products.forEach(function(prod, idx){
         if(typeof(index)!='undefined' && product.rec_attr.length){
           //console.log(JSON.stringify(prod.attrline).toLowerCase() +"==="+ JSON.stringify(product.attrline).toLowerCase());
           if(JSON.stringify(prod.attrline).toLowerCase() === JSON.stringify(product.attrline).toLowerCase()){
             prod.rec_attr[index].qty++;
             //prod.display.qty = prod.rec_attr[index].qty;
             productInCart = prod;  return;
           }
         }else{
           if (prod.id === product.id) {
              productInCart = prod;  return;
           }
         }


       });

       //console.log('productInCart ',productInCart);

       if (productInCart) {
         this.addOneProduct(productInCart);
       } else {
         product.purchaseQuantity = 0;
         product.total =  this.formatTotal(product.rec_saleprice*1);
        // this.cartProducts.push(product);
         this.cartData.products.push(product);
         this.addOneProduct(product);
       }
   }
   //------------Add One Product In Cart--------------------
   addOneProduct(product) {
       if(product.quantity>0){
         this.isAvailable = true;
         --product.quantity;
         ++product.purchaseQuantity;
         product.display.qty = product.purchaseQuantity;
         product.total = this.formatTotal(product.display.sale_price*product.purchaseQuantity);
       }else{
         this.isAvailable = false;
       }
       this.updateTotal();
   }
  //-----------Remvoe One Product-----------------------------
   removeOneProduct(OrProduct,ind) {
     let product:any;
       let Tmpproduct:any = JSON.parse(JSON.stringify(OrProduct));
       if(typeof(ind)!='undefined' && OrProduct.rec_attr.length){
         Tmpproduct.attrline = [];
         Tmpproduct.attrline.push({
           i:ind,
           attr_pid:OrProduct.rec_attr[ind].rec_pid,
           attr_id:OrProduct.rec_attr[ind].rec_attr_id,
           attr_vid:OrProduct.rec_attr[ind].rec_attr_vid});
       }

       this.cartData.products.forEach(function(prod, index){
           if(typeof(ind)!='undefined' && OrProduct.rec_attr.length){

             //console.log(JSON.stringify(prod.attrline).toLowerCase() +"==="+ JSON.stringify(Tmpproduct.attrline).toLowerCase())
             if(JSON.stringify(prod.attrline).toLowerCase() === JSON.stringify(Tmpproduct.attrline).toLowerCase()){
               //------------------
               if(typeof(OrProduct.total)=='undefined'){
                   if(OrProduct.rec_attr.length){
                     ++OrProduct.rec_attr[ind].stock;
                     --OrProduct.rec_attr[ind].qty;
                     OrProduct.display.attr_title   = OrProduct.rec_attr[ind].rec_title;
                     OrProduct.display.price        = OrProduct.rec_attr[ind].rec_attr_price;
                     OrProduct.display.sale_price   = OrProduct.rec_attr[ind].rec_attr_sale_price;
                     OrProduct.display.qty          = OrProduct.rec_attr[ind].qty;
                     OrProduct.display.indx        = ind;
                   }else{
                     ++OrProduct.quantity;
                     --OrProduct.purchaseQuantity;
                      OrProduct.display.price       = OrProduct.rec_price;
                      OrProduct.display.sale_price  = OrProduct.rec_sale_price;
                      OrProduct.display.qty         = OrProduct.purchaseQuantity;
                   }
                 }
               //------------------
                //console.log('MATCHED ');
                product=prod;
                ++product.rec_attr[ind].stock;
                --product.rec_attr[ind].qty;
                --product.display.qty;
             }
           }else{
             if (prod.id === OrProduct.id) {
                 //console.log('NOT MATCHED ');
                 if(typeof(OrProduct.total)=='undefined'){
                    //console.log('TOTAL NOT DEFINED');
                 ++OrProduct.quantity;
                 --OrProduct.purchaseQuantity;
                   OrProduct.display.price       = OrProduct.rec_price;
                   OrProduct.display.sale_price  = OrProduct.rec_sale_price;
                   OrProduct.display.qty         = OrProduct.purchaseQuantity;
                 }
                product=prod;
                --product.display.qty;
             }
           }

       });
       //console.log('product ',product);
 	    this.isAvailable = true;
       ++product.quantity;
       --product.purchaseQuantity;

 	     product.total = this.formatTotal(product.display.sale_price*product.purchaseQuantity);

 	  	if(product.purchaseQuantity<=0){

         if(OrProduct.rec_attr.length){
           OrProduct.rec_attr.forEach(function(attr, index){
             if(attr.qty>0){
               OrProduct.display.attr_title   = OrProduct.rec_attr[index].rec_title;
               OrProduct.display.price        = OrProduct.rec_attr[index].rec_attr_price;
               OrProduct.display.sale_price   = OrProduct.rec_attr[index].rec_attr_sale_price;
               OrProduct.display.qty          = OrProduct.rec_attr[index].qty;
               OrProduct.display.indx        = index;
             }
          });
         }

         this.removeProduct(product);
      }

       this.updateTotal();
     };
  //----------Remove Product-----------------------------------
   removeProduct(product) {
       this.cartData.products.forEach(function(prod, i){
         if(product.rec_attr.length){
              if(JSON.stringify(prod.attrline).toLowerCase() === JSON.stringify(product.attrline).toLowerCase()){
                //console.log(JSON.stringify(prod.attrline).toLowerCase() +"======"+ JSON.stringify(product.attrline).toLowerCase());

                this.cartData.products.splice(i, 1);
                this.updateTotal();
              }
         }else{
           if (product.id === prod.id) {
             this.cartData.products.splice(i, 1);
             this.updateTotal();
           }
         }

       }.bind(this));
       //console.log('this.cartData.products ',this.cartData.products);
     };
  //---------------------------------------------
     updateTotal() {
        var cartGrossTotal = 0;
         //if(this.cartProducts.length>0){
         if(this.cartData.products.length>0){
           this.cartData.products.forEach(function(prod, index){
              cartGrossTotal += parseFloat(prod.display.sale_price) * parseInt(prod.purchaseQuantity);
           });
         }
         this.cartItemsTotal = this.cartData.products.length;
         this.cartTotalAmount = this.formatTotal(cartGrossTotal);
         this.cartData.subTotal = this.cartTotalAmount;
         return this.formatTotal(cartGrossTotal);
     };
   //---------------------------------------------
     getCartData(){  return this.cartData.products; }
     getItemTotal(){ return this.cartData.products.length; }
     getCartTotal(){
        this.cartGrossTotal =  this.updateTotal();
        return this.cartGrossTotal;
      }
     getCart(){
         this.cartData.grossTotal = this.formatTotal(parseFloat(this.cartData.subTotal)-parseFloat(this.cartData.discount.amount)+parseFloat(this.cartData.deliveryMethod.amount)+parseFloat(this.cartData.taxes.amount));
         return this.cartData;
      }

     resetCart(){
          this.cartData = {
             products:[],
             subTotal:0,
             discount:{type:'',amount:0,code:''},
             deliveryAddress:'',
             deliveryMethod:{type:'',amount:0,code:''},
             taxes:{type:'',amount:0,code:''},
             paymentMethod:{type:'',code:''},
             grossTotal:0
           };
            this.cartItemsTotal = '';
            this.cartTotalAmount = '';
     }
    //---------------------------------------------
    restCartProducts(productData){
        let cartData:any = [];
        cartData = this.getCartData();
        //let parent = this;

        if(productData.length){
          productData.forEach(function(prod, index){
              prod.rec_attr.forEach(function(attrib, index){
                attrib.qty = 0;
              });
              if(prod.rec_attr.length){
                prod.display.attr_title   = prod.rec_attr[0].rec_title;
                prod.display.price        = prod.rec_attr[0].rec_attr_price;
                prod.display.sale_price   = prod.rec_attr[0].rec_attr_sale_price;
                prod.display.qty          = prod.rec_attr[0].qty;

              }else{
                 prod.display.price       = prod.rec_price;
                 prod.display.sale_price  = prod.rec_sale_price;
              }
              prod.display.indx      = 0;
              prod.display.qty       = 0;
              prod.purchaseQuantity  = 0;
              //console.log('prod ',prod)
          });
        }

        //console.log('productData ',productData);

        if(cartData.length){
          cartData.forEach(function(prod, index){
               let pobj = productData.filter(item => item.id == prod.id)[0];

               //console.log("prod ",prod)
               if(pobj){
                 if(pobj.rec_attr.length){
                   let ival = prod.attrline[0].i;
                   pobj.rec_attr[ival].qty = prod.purchaseQuantity;

                   pobj.display.attr_title   = pobj.rec_attr[ival].rec_title;
                   pobj.display.price        = pobj.rec_attr[ival].rec_attr_price;
                   pobj.display.sale_price   = pobj.rec_attr[ival].rec_attr_sale_price;
                   pobj.display.indx         = ival;
                   pobj.display.qty          = pobj.rec_attr[ival].qty;
                   //console.log('TEEEE ',pobj);
                 }else{
                   //console.log('SSSS ',pobj);
                   pobj.display.price        = prod.rec_price;
                   pobj.display.sale_price   = prod.rec_sale_price;
                   pobj.display.qty          = prod.purchaseQuantity;
                   pobj.purchaseQuantity     = prod.purchaseQuantity;
                 }
               }

          });
        }

    }
    //---------------------------------------------
     formatTotal(total) {
      // return total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
       return total.toFixed(2);
     }
     formatedPrice(total){

        return 'INR'+total.replace(/\d(?=(\d{3})+\.)/g, '$&,');
     }
   //---------------------------------------------
}
