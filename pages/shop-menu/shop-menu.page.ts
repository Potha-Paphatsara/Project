import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-shop-menu',
  templateUrl: './shop-menu.page.html',
  styleUrls: ['./shop-menu.page.scss'],
})
export class ShopMenuPage implements OnInit {
  pages = [
    {
      title:'shop',
      icon:'clipboard-list',
      url:'/shop-menu/shop'
    },

    {
      title:'address',
      icon:'clipboard-list',
      url:'/shop-menu/shop-address'
    },

    {
      title:'payment',
      icon:'cash',
      url:'/shop-menu/shop-payment'
    },    
    {
      title:'notifications',
      icon:'notifications',
      url:'/shop-menu/shop-notifications'
    },
    {
      title:'customer',
      icon:'person',
      url:'/menu/dashboard/tabs/nearme'
    },
     
  ]

  selectedPath = '';
  constructor(private router:Router) {
      this.router.events.subscribe((event:RouterEvent)=>{
         if(event && event.url){
            this.selectedPath = event.url;
         }
      });

   }

  ngOnInit() {
  }

}

