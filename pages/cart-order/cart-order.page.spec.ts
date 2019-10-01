import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartOrderPage } from './cart-order.page';

describe('CartOrderPage', () => {
  let component: CartOrderPage;
  let fixture: ComponentFixture<CartOrderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartOrderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
