import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasscComponent } from './passc.component';

describe('PasscComponent', () => {
  let component: PasscComponent;
  let fixture: ComponentFixture<PasscComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasscComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
