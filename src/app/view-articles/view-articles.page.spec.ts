import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewArticlesPage } from './view-articles.page';

describe('ViewArticlesPage', () => {
  let component: ViewArticlesPage;
  let fixture: ComponentFixture<ViewArticlesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewArticlesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewArticlesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
