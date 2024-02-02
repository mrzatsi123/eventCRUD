import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicalEventDetailsComponent } from './physical-event-details.component';

describe('PhysicalEventDetailsComponent', () => {
  let component: PhysicalEventDetailsComponent;
  let fixture: ComponentFixture<PhysicalEventDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhysicalEventDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhysicalEventDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
