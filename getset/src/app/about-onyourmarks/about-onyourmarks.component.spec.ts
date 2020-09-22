import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutOnyourmarksComponent } from './about-onyourmarks.component';

describe('AboutOnyourmarksComponent', () => {
  let component: AboutOnyourmarksComponent;
  let fixture: ComponentFixture<AboutOnyourmarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutOnyourmarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutOnyourmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
