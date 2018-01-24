import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftWithPurchaseAmountComponent } from './gift-with-purchase-amount.component';

describe('GiftWithPurchaseAmountComponent', () => {
  let component: GiftWithPurchaseAmountComponent;
  let fixture: ComponentFixture<GiftWithPurchaseAmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiftWithPurchaseAmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiftWithPurchaseAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
