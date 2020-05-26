import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CAROLINAComponent } from './carolina.component';

describe('CAROLINAComponent', () => {
  let component: CAROLINAComponent;
  let fixture: ComponentFixture<CAROLINAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CAROLINAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CAROLINAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
