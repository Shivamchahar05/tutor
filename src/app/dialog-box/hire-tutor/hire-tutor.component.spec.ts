import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HireTutorComponent } from './hire-tutor.component';

describe('HireTutorComponent', () => {
  let component: HireTutorComponent;
  let fixture: ComponentFixture<HireTutorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HireTutorComponent]
    });
    fixture = TestBed.createComponent(HireTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
