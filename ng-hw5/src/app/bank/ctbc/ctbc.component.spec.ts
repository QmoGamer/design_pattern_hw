import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CtbcComponent } from './ctbc.component';

describe('CtbcComponent', () => {
  let component: CtbcComponent;
  let fixture: ComponentFixture<CtbcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CtbcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CtbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
