import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstractorsComponent } from './instractors.component';

describe('InstractorsComponent', () => {
  let component: InstractorsComponent;
  let fixture: ComponentFixture<InstractorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstractorsComponent]
    });
    fixture = TestBed.createComponent(InstractorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
