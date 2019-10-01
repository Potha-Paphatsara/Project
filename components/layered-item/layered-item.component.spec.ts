import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayeredItemComponent } from './layered-item.component';

describe('LayeredItemComponent', () => {
  let component: LayeredItemComponent;
  let fixture: ComponentFixture<LayeredItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayeredItemComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayeredItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
