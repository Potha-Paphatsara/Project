import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseLanguagePage } from './choose-language.page';

describe('ChooseLanguagePage', () => {
  let component: ChooseLanguagePage;
  let fixture: ComponentFixture<ChooseLanguagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseLanguagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseLanguagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
