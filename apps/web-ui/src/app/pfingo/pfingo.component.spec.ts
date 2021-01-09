import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfingoComponent } from './pfingo.component';

describe('PfingoComponent', () => {
  let component: PfingoComponent;
  let fixture: ComponentFixture<PfingoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PfingoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PfingoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
