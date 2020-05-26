import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IMMIGRANTComponent } from './immigrant.component';

describe('IMMIGRANTComponent', () => {
  let component: IMMIGRANTComponent;
  let fixture: ComponentFixture<IMMIGRANTComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IMMIGRANTComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IMMIGRANTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
