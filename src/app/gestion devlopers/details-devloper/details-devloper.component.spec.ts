import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDevloperComponent } from './details-devloper.component';

describe('DetailsDevloperComponent', () => {
  let component: DetailsDevloperComponent;
  let fixture: ComponentFixture<DetailsDevloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsDevloperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsDevloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
