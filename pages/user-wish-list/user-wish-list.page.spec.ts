import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserWishListPage } from './user-wish-list.page';

describe('UserWishListPage', () => {
  let component: UserWishListPage;
  let fixture: ComponentFixture<UserWishListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserWishListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWishListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
