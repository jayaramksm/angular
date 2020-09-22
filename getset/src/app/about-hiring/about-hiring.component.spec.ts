import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutHiringComponent } from './about-hiring.component';

describe('AboutHiringComponent', () => {
  let component: AboutHiringComponent;
  let fixture: ComponentFixture<AboutHiringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutHiringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutHiringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
