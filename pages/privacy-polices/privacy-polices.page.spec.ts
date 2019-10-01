import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyPolicesPage } from './privacy-polices.page';

describe('PrivacyPolicesPage', () => {
  let component: PrivacyPolicesPage;
  let fixture: ComponentFixture<PrivacyPolicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivacyPolicesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyPolicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
