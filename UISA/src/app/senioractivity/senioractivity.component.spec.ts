import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SENIORACTIVITYComponent } from './senioractivity.component';

describe('SENIORACTIVITYComponent', () => {
  let component: SENIORACTIVITYComponent;
  let fixture: ComponentFixture<SENIORACTIVITYComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SENIORACTIVITYComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SENIORACTIVITYComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
