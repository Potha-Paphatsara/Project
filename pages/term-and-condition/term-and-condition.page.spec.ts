import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermAndConditionPage } from './term-and-condition.page';

describe('TermAndConditionPage', () => {
  let component: TermAndConditionPage;
  let fixture: ComponentFixture<TermAndConditionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermAndConditionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermAndConditionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
