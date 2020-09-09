import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinCoinsComponent } from './spin-coins.component';

describe('SpinCoinsComponent', () => {
  let component: SpinCoinsComponent;
  let fixture: ComponentFixture<SpinCoinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpinCoinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinCoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
