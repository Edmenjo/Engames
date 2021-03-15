import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseItComponent } from './choose-it.component';

describe('ChooseItComponent', () => {
  let component: ChooseItComponent;
  let fixture: ComponentFixture<ChooseItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseItComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
