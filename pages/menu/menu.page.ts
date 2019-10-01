import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title:'Dashboard',
      icon:'clipboard-list',
      url:'/menu/dashboard'
    },
    {
      title:'Your Account',
      icon:'user-circle',
      url:'/menu/dashboard/tabs/account'
    },
    {
      title:'Your Orders',
      icon:'shopping-bag',
      url:'/menu/user-orders'
    },

    {
      title:'Feedback',
      icon:'comments',
      url:'/menu/feedback'
    },
    {
      title:'FAQ',
      icon:'question-circle',
      url:'/menu/faq'
    },
    {
      title:'About Us',
      icon:'info-circle',
      url:'/menu/about-us'
    },
    {
      title:'Term & Conditions',
      icon:'info-circle',
      url:'/menu/term-and-condition'
    },
    {
      title:'Privacy Policies',
      icon:'info-circle',
      url:'/menu/privacy-polices'
    },
    {
      title:'Cart List',
      icon:'info-circle',
      url:'/menu/cart-list'
    },    {
      title:'logout',
      icon:'info-circle',
      url:'/menu/cart-list'
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
