import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfingoDetailsComponent } from './pfingo-details.component';

describe('PfingoDetailsComponent', () => {
  let component: PfingoDetailsComponent;
  let fixture: ComponentFixture<PfingoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PfingoDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PfingoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
