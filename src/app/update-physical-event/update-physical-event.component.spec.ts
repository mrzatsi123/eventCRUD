import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePhysicalEventComponent } from './update-physical-event.component';

describe('UpdatePhysicalEventComponent', () => {
  let component: UpdatePhysicalEventComponent;
  let fixture: ComponentFixture<UpdatePhysicalEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdatePhysicalEventComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdatePhysicalEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
