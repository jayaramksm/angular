import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelcomeComponent } from './telcome.component';

describe('TelcomeComponent', () => {
  let component: TelcomeComponent;
  let fixture: ComponentFixture<TelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
