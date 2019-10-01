import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopMenuPage } from './shop-menu.page';

describe('ShopMenuPage', () => {
  let component: ShopMenuPage;
  let fixture: ComponentFixture<ShopMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopMenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
