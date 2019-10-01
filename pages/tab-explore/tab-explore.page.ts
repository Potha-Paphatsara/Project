import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-explore',
  templateUrl: './tab-explore.page.html',
  styleUrls: ['./tab-explore.page.scss'],
})
export class TabExplorePage implements OnInit {

  public data:any;
  constructor() { }

  ngOnInit() {
      this.data = [
            {img:'https://hybridtemplates.com/demos/food-point/images/dish_01.jpg',desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur, velit in efficitur ultrices, odio mi tristique nunc, nec varius nunc enim ut mi. Ut sed nisl ultricies, dapibus arcu non, pretium felis'},
            {img:'https://hybridtemplates.com/demos/food-point/images/dish_02.jpg',desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur, velit in efficitur ultrices, odio mi tristique nunc, nec varius nunc enim ut mi. Ut sed nisl ultricies, dapibus arcu non, pretium felis'},
            {img:'https://hybridtemplates.com/demos/food-point/images/dish_03.jpg',desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur, velit in efficitur ultrices, odio mi tristique nunc, nec varius nunc enim ut mi. Ut sed nisl ultricies, dapibus arcu non, pretium felis'},
            {img:'https://hybridtemplates.com/demos/food-point/images/dish_04.jpg',desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur, velit in efficitur ultrices, odio mi tristique nunc, nec varius nunc enim ut mi. Ut sed nisl ultricies, dapibus arcu non, pretium felis'},
            {img:'https://hybridtemplates.com/demos/food-point/images/dish_05.jpg',desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur, velit in efficitur ultrices, odio mi tristique nunc, nec varius nunc enim ut mi. Ut sed nisl ultricies, dapibus arcu non, pretium felis'}
        ];
        
  }

}
