import { EventHandlerService } from '../event-handler.service'; // Importing the EventHandlerService
import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importing Router for navigation

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.css'
})
export class CreateEventComponent {

  image:any; // Variable to store image data

  // Function to handle image selection
  selectImage(_event:any){
    this.event_handler.image= _event.target.files[0]; // Storing the selected image in the event_handler service
    this.image=_event.target.files[0]; // Storing the selected image locally
  }

  // Constructor for the component injecting the shared service event_handler and router for navigation
  constructor(public event_handler: EventHandlerService, private router: Router){}

  // Object to store event data
  event = {
    name : '',
    startDate: '',
    startTime: '',
    category: '',
    description: '',
    type: ''
  }

  // Function to handle form submission
  onSubmit(){

    // Assigning form values to the event object in the EventHandlerService service
    this.event_handler.event.name=this.event.name;
    this.event_handler.event.category=this.event.category;
    this.event_handler.event.startDate=this.event.startDate;
    this.event_handler.event.startTime=this.event.startTime;
    this.event_handler.event.description=this.event.description;
    this.event_handler.event.type=this.event.type;

    // Navigating based on event type
    if (this.event.type === 'physical') {
      this.router.navigate(['/physical']); // Navigate to physical event route
    } else if (this.event.type === 'virtual') {
      this.router.navigate(['/virtual']); // Navigate to virtual event route
    }
  }
}
