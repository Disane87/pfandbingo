import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfingoItemComponent } from './pfingo-item.component';

describe('PfingoItemComponent', () => {
  let component: PfingoItemComponent;
  let fixture: ComponentFixture<PfingoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PfingoItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PfingoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
