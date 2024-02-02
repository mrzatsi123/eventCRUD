import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Importing ActivatedRoute and Router from Angular router module
import { EventHandlerService } from '../event-handler.service'; // Importing EventHandlerService

@Component({
  selector: 'app-virtual-event-details',
  templateUrl: './virtual-event-details.component.html',
  styleUrl: './virtual-event-details.component.css'
})
export class VirtualEventDetailsComponent implements OnInit {

  // Function to delete an event by ID
  delete(id : any) {
    // Calling the deleteEvent method from the EventHandlerService
    this.event_handler.deleteEvent(id)
      .subscribe(
        res=>{
          console.log(res); // Logging the response
          this.router.navigate(['/']); // Navigating back to the home route after deletion
        },
        err=>{
          console.log(err); // Logging any errors
        }
      );
  }

  event:any; // Variable to store event details
  id: any; // Variable to store event ID

  // Constructor for the component
  // Injecting ActivatedRoute to fetch paramaters from url
  // Injecting the shared service EventHandlerService and Router
  constructor(private route: ActivatedRoute, public event_handler: EventHandlerService, private router: Router ){}



  // Lifecycle hook called after Angular has initialized all data-bound properties of a directive
  ngOnInit(): void {
    this.id= this.route.snapshot.paramMap.get('id'); // Extracting the ID from the route parameters

    // Calling the getEventById method from the EventHandlerService to get event details by ID
    this.event_handler.getEventById(this.id)
      .subscribe(
        res => {
          this.event = res; // Assigning the response to the event variable
        },
        err =>{
          console.log(err); // Logging any errors
        }
      );
  }


}
