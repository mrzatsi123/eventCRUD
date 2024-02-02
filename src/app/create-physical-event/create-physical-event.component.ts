import { Component } from '@angular/core';
import { EventHandlerService } from '../event-handler.service'; // Importing the EventHandlerService
import { Router } from '@angular/router'; // Importing Router for navigation

@Component({
  selector: 'app-create-physical-event',
  templateUrl: './create-physical-event.component.html',
  styleUrl: './create-physical-event.component.css'
})
export class CreatePhysicalEventComponent {

  // Variable to store unique physical event properties
  event = {
    inUni: undefined, //boolean set undefined so its neither true nor false
    state: '',
    place: '',
    locationLink: '',
    locationDescription:''
  }

  // Constructor for the component injecting the shared service EventHandlerService and router for navigation
  constructor(public event_handler: EventHandlerService, private router: Router){}

  // Function to handle form submission
  onSubmit(){
    // Assigning form values to the event object in the event_handler shared service
    this.event_handler.event.insideUniversity=this.event.inUni;
    this.event_handler.event.state=this.event.state;
    this.event_handler.event.place=this.event.place;
    this.event_handler.event.locationLink=this.event.locationLink;
    this.event_handler.event.locationDesciption=this.event.locationDescription;

    // Submitting the event
    this.event_handler.submitEvent();

    // Emitting event using event emitter to notify main component to load all events
    // The emitter is from the shared event_handler service
    this.event_handler.myEventEmitter.emit();

    // Navigating to home route
    this.router.navigate(['/']);
  };
}
