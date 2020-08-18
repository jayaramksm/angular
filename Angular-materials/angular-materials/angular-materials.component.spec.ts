import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialsComponent } from './angular-materials.component';

describe('AngularMaterialsComponent', () => {
  let component: AngularMaterialsComponent;
  let fixture: ComponentFixture<AngularMaterialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularMaterialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
