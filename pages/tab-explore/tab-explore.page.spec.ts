import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabExplorePage } from './tab-explore.page';

describe('TabExplorePage', () => {
  let component: TabExplorePage;
  let fixture: ComponentFixture<TabExplorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabExplorePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabExplorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
