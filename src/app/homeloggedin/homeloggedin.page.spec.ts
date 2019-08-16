import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeloggedinPage } from './homeloggedin.page';

describe('HomeloggedinPage', () => {
  let component: HomeloggedinPage;
  let fixture: ComponentFixture<HomeloggedinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeloggedinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeloggedinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
