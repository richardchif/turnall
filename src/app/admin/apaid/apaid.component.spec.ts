import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApaidComponent } from './apaid.component';

describe('ApaidComponent', () => {
  let component: ApaidComponent;
  let fixture: ComponentFixture<ApaidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApaidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApaidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
