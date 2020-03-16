import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Jayaram1Component } from './jayaram1.component';

describe('Jayaram1Component', () => {
  let component: Jayaram1Component;
  let fixture: ComponentFixture<Jayaram1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Jayaram1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Jayaram1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
