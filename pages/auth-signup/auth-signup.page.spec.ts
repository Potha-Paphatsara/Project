import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSignupPage } from './auth-signup.page';

describe('AuthSignupPage', () => {
  let component: AuthSignupPage;
  let fixture: ComponentFixture<AuthSignupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthSignupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthSignupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
