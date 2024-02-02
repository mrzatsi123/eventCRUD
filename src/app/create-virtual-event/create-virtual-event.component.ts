import { Component } from '@angular/core';
import { EventHandlerService } from '../event-handler.service'; // Importing EventHandlerService
import { Router } from '@angular/router'; // Importing Router from Angular router module

@Component({
  selector: 'app-create-virtual-event',
  templateUrl: './create-virtual-event.component.html',
  styleUrl: './create-virtual-event.component.css'
})
export class CreateVirtualEventComponent {

  // Variable to store unique virtual event properties
  event = {
    appName:'',
    appLink:''
  }

  // Constructor for the component injecting the shared service EventHandlerService and router for navigation
  constructor(public event_handler: EventHandlerService, private router: Router){}

  // Function to handle form submission
  async onSubmit(){
    // Assigning form values to the event object in the event_handler shared service
    this.event_handler.event.appName=this.event.appName;
    this.event_handler.event.appLink=this.event.appLink;

    // Submitting the event
    this.event_handler.submitEvent();

    // Emitting event using event emitter to notify main component to load all events
    this.event_handler.myEventEmitter.emit();

    // Navigating to home route
    this.router.navigate(['/']);
  };

}
