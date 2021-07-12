import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SdebtComponent } from './sdebt.component';

describe('SdebtComponent', () => {
  let component: SdebtComponent;
  let fixture: ComponentFixture<SdebtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SdebtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SdebtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
