import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CathayComponent } from './cathay.component';

describe('CathayComponent', () => {
  let component: CathayComponent;
  let fixture: ComponentFixture<CathayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CathayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CathayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
