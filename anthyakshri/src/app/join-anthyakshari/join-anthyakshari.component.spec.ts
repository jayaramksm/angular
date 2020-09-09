import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinAnthyakshariComponent } from './join-anthyakshari.component';

describe('JoinAnthyakshariComponent', () => {
  let component: JoinAnthyakshariComponent;
  let fixture: ComponentFixture<JoinAnthyakshariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinAnthyakshariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinAnthyakshariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
