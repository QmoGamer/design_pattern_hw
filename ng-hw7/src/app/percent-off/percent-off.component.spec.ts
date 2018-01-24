import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PercentOffComponent } from './percent-off.component';

describe('PercentOffComponent', () => {
  let component: PercentOffComponent;
  let fixture: ComponentFixture<PercentOffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PercentOffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PercentOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
