import { Component, Input, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-sliding-banners',
  templateUrl: './sliding-banners.component.html',
  styleUrls: ['./sliding-banners.component.scss'],
})
export class SlidingBannersComponent implements OnInit {

  @ViewChild('abcd')

 

  _data = [];
  _isSkeleton:boolean=false;
  constructor() { }

  ngOnInit() {
  }

  @Input() set data(val: any) {
    let data = (val !== undefined && val !== null) ? val : [];
    this._data = data;
  }

  @Input() set isSkeleton(val: boolean) {
    this._isSkeleton = (val !== undefined && val !== null) ? val : false;
  }
}
