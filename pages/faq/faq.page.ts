import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.page.html',
  styleUrls: ['./faq.page.scss'],
})
export class FaqPage implements OnInit {

  data: Array<{id:number,title: string, details: string, icon: string, showDetails: boolean}> = [];
  constructor() {
   
  }
  ngOnInit() {
    for(let i = 0; i < 5; i++ ){
      this.data.push({
          id:i,
          title: 'Title '+i,
          details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          icon: 'ios-arrow-forward-outline',
          showDetails: false
        });
    }
  }

  toggleDetails(data) {

    if (data.showDetails) {
        data.showDetails = false;
        data.icon = 'ios-arrow-forward-outline';
    } else {
        this.data.forEach(function(obj,index){
          obj.showDetails = false;
          obj.icon = 'ios-arrow-forward-outline';
        });
        data.showDetails = true;
        data.icon = 'ios-arrow-down-outline';
    }
  }

 
}
