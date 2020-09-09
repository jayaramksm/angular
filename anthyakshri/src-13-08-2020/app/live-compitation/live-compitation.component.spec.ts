import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveCompitationComponent } from './live-compitation.component';

describe('LiveCompitationComponent', () => {
  let component: LiveCompitationComponent;
  let fixture: ComponentFixture<LiveCompitationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveCompitationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveCompitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
