import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingaComponent } from './loadinga.component';

describe('LoadingaComponent', () => {
  let component: LoadingaComponent;
  let fixture: ComponentFixture<LoadingaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
