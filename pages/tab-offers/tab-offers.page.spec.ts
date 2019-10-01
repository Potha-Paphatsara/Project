import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabOffersPage } from './tab-offers.page';

describe('TabOffersPage', () => {
  let component: TabOffersPage;
  let fixture: ComponentFixture<TabOffersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabOffersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabOffersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
