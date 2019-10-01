import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-language',
  templateUrl: './choose-language.page.html',
  styleUrls: ['./choose-language.page.scss'],
})
export class ChooseLanguagePage implements OnInit {

  public langData:any;
  public selctedLanguage:number = 1;
  constructor() { }

  ngOnInit() {
    this.langData = [
      {id:1,title:"English"},
      {id:2,title:"French"},
      {id:3,title:"German"},
      {id:4,title:"Greek"},
      {id:5,title:"Polish"},
      {id:6,title:"Russian"},
      {id:7,title:"Korean"},
      {id:8,title:"Spanish"}
      ];
  }

}
