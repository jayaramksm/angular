import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteFirendsComponent } from './invite-firends.component';

describe('InviteFirendsComponent', () => {
  let component: InviteFirendsComponent;
  let fixture: ComponentFixture<InviteFirendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteFirendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteFirendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
