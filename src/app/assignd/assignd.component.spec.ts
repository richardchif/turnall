import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigndComponent } from './assignd.component';

describe('AssigndComponent', () => {
  let component: AssigndComponent;
  let fixture: ComponentFixture<AssigndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssigndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssigndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
