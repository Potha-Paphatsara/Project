import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-layered-item',
  templateUrl: './layered-item.component.html',
  styleUrls: ['./layered-item.component.scss'],
})
export class LayeredItemComponent implements OnInit {

  _isSkeleton:boolean;
  _obj:any;

  _image:string;
  _title:string;
  _total_items:string;
  _offer:string;
  _icon:any[];
  _link:any;
  constructor() { }

  ngOnInit() {}

  @Input() set isSkeleton(val: boolean) {
    this._isSkeleton = (val !== undefined && val !== null) ? val : false;
  }

  @Input() set object(val: string) {
    this._obj = (val !== undefined && val !== null) ? val : {};
  }

  @Input() set icon(val:any[]) {
    this._icon = (val !== undefined && val !== null) ? val : [];
  }

  @Input() set link(val:string) {
    this._link = (val !== undefined && val !== null) ? val : '';
  }


}
