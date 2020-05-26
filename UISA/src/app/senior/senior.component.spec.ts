import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SENIORComponent } from './senior.component';

describe('SENIORComponent', () => {
  let component: SENIORComponent;
  let fixture: ComponentFixture<SENIORComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SENIORComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SENIORComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
