import { Component, OnInit } from '@angular/core';
import { EventHandlerService } from '../event-handler.service'; // Importing EventHandlerService

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  // Variable to store events
  events: any;

  // Constructor for the component
  //Injecting the shared service EventHandlerService
  constructor(private event_handler: EventHandlerService) {}

  // Lifecycle hook called after Angular has initialized all data-bound properties of a directive
  ngOnInit(): void {
    this.loadEvents(); // Load events when the component initializes
    this.onEventCreated(); // Subscribe to event creation
  }

  // Function to load events
  loadEvents(): void {
    // Calling the service method to get all events
    this.event_handler.getAllEvents().subscribe(
      (res) => {
        this.events = res; // Assigning the response to the events variable
      },
      (err) => {
        console.log(err); // Logging any errors
      }
    );
  }

  // Function to handle event creation
  onEventCreated(): void {
    // Subscribing to the event emitter in EventHandlerService
    this.event_handler.myEventEmitter.subscribe(() => {
      this.loadEvents(); // Reloading events when a new event is created
      this.loadEvents(); // Reloading events again for the purpose of getting the latest data from the database
    });
  }
}
