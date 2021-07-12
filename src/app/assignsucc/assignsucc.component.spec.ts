import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignsuccComponent } from './assignsucc.component';

describe('AssignsuccComponent', () => {
  let component: AssignsuccComponent;
  let fixture: ComponentFixture<AssignsuccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignsuccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignsuccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
