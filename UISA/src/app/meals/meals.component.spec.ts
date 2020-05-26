import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MEALSComponent } from './meals.component';

describe('MEALSComponent', () => {
  let component: MEALSComponent;
  let fixture: ComponentFixture<MEALSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MEALSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MEALSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
