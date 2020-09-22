import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutGetsetComponent } from './about-getset.component';

describe('AboutGetsetComponent', () => {
  let component: AboutGetsetComponent;
  let fixture: ComponentFixture<AboutGetsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutGetsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutGetsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
