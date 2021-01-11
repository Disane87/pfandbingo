import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotValidatedAlertComponent } from './not-validated-alert.component';

describe('NotValidatedAlertComponent', () => {
  let component: NotValidatedAlertComponent;
  let fixture: ComponentFixture<NotValidatedAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotValidatedAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotValidatedAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
