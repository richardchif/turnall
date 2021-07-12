import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingbComponent } from './loadingb.component';

describe('LoadingbComponent', () => {
  let component: LoadingbComponent;
  let fixture: ComponentFixture<LoadingbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
