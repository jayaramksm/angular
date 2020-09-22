import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeGetsetComponent } from './home-getset.component';

describe('HomeGetsetComponent', () => {
  let component: HomeGetsetComponent;
  let fixture: ComponentFixture<HomeGetsetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeGetsetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeGetsetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
