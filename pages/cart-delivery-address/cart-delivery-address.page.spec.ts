import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartDeliveryAddressPage } from './cart-delivery-address.page';

describe('CartDeliveryAddressPage', () => {
  let component: CartDeliveryAddressPage;
  let fixture: ComponentFixture<CartDeliveryAddressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartDeliveryAddressPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartDeliveryAddressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
