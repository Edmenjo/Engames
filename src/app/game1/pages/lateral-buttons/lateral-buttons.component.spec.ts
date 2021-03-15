import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LateralButtonsComponent } from './lateral-buttons.component';

describe('LateralButtonsComponent', () => {
  let component: LateralButtonsComponent;
  let fixture: ComponentFixture<LateralButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LateralButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LateralButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
