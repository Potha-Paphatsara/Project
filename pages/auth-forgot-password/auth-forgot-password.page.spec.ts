import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthForgotPasswordPage } from './auth-forgot-password.page';

describe('AuthForgotPasswordPage', () => {
  let component: AuthForgotPasswordPage;
  let fixture: ComponentFixture<AuthForgotPasswordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthForgotPasswordPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthForgotPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
