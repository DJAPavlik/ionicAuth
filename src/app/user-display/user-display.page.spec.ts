import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDisplayPage } from './user-display.page';

describe('UserDisplayPage', () => {
  let component: UserDisplayPage;
  let fixture: ComponentFixture<UserDisplayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDisplayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDisplayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
