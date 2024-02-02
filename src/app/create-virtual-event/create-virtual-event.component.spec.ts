import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVirtualEventComponent } from './create-virtual-event.component';

describe('CreateVirtualEventComponent', () => {
  let component: CreateVirtualEventComponent;
  let fixture: ComponentFixture<CreateVirtualEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateVirtualEventComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateVirtualEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
