import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePhysicalEventComponent } from './create-physical-event.component';

describe('CreatePhysicalEventComponent', () => {
  let component: CreatePhysicalEventComponent;
  let fixture: ComponentFixture<CreatePhysicalEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatePhysicalEventComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatePhysicalEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
