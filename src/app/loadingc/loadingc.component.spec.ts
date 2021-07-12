import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingcComponent } from './loadingc.component';

describe('LoadingcComponent', () => {
  let component: LoadingcComponent;
  let fixture: ComponentFixture<LoadingcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
