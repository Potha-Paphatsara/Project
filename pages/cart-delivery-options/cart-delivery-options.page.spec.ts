import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartDeliveryOptionsPage } from './cart-delivery-options.page';

describe('CartDeliveryOptionsPage', () => {
  let component: CartDeliveryOptionsPage;
  let fixture: ComponentFixture<CartDeliveryOptionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartDeliveryOptionsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartDeliveryOptionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
