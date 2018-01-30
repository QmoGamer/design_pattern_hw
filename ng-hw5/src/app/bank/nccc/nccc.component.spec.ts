import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NcccComponent } from './nccc.component';

describe('NcccComponent', () => {
  let component: NcccComponent;
  let fixture: ComponentFixture<NcccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NcccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NcccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
