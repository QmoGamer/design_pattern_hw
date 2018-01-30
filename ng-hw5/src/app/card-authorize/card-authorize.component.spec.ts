import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAuthorizeComponent } from './card-authorize.component';

describe('CardAuthorizeComponent', () => {
  let component: CardAuthorizeComponent;
  let fixture: ComponentFixture<CardAuthorizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardAuthorizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardAuthorizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
