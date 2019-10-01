import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { CartService } from './../../services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  public pObj:any={rec_title:'',display:{qty:'0',indx:'0'} };

  constructor(
    public activedRoute:ActivatedRoute, 
    public cartService:CartService,
    public productService:ProductsService) { }

  ngOnInit() {

    let pro_id = this.activedRoute.snapshot.paramMap.get('pro_id');

    this.productService.getProducts()
      .then(res => {
          let result:any = res;
          console.log(result);
    
        this.pObj = result.data.find(item => item.id === pro_id);
        this.pObj.display = {};
        this.pObj.display.indx   = 0;
        this.pObj.display.qty    = 0;
          //console.log(this.productData);
    });

  }

  addToCart(pObj,index){
    this.cartService.addToCart(pObj,index);
   // this.commonServices.toastMsg('Successfuly Added');

  }

  LessOneItem(pObj,index){
    this.cartService.removeOneProduct(pObj,index);
  }

}
