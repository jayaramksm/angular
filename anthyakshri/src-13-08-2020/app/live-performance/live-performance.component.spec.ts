import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivePerformanceComponent } from './live-performance.component';

describe('LivePerformanceComponent', () => {
  let component: LivePerformanceComponent;
  let fixture: ComponentFixture<LivePerformanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivePerformanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivePerformanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
