import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVirtualEventComponent } from './update-virtual-event.component';

describe('UpdateVirtualEventComponent', () => {
  let component: UpdateVirtualEventComponent;
  let fixture: ComponentFixture<UpdateVirtualEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateVirtualEventComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateVirtualEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
