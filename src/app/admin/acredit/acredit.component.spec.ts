import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcreditComponent } from './acredit.component';

describe('AcreditComponent', () => {
  let component: AcreditComponent;
  let fixture: ComponentFixture<AcreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
