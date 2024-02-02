import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // Importing ActivatedRoute and Router from Angular router module
import { EventHandlerService } from '../event-handler.service'; // Importing EventHandlerService

@Component({
  selector: 'app-update-physical-event',
  templateUrl: './update-physical-event.component.html',
  styleUrl: './update-physical-event.component.css'
})
export class UpdatePhysicalEventComponent implements OnInit {
  image:any; // Variable to store the selected image
  event: any; // Variable to store the updated event
  id: any; // Variable to store the event ID

  // Function to handle image selection
  selectImage(_event: any) {
    this.image= _event.target.files[0]; // Storing the selected image
  }

  // Constructor for the component
  // Injecting ActivatedRoute to fetch paramaters from url
  // Injecting the shared service EventHandlerService and Router
  constructor(private route:ActivatedRoute, public event_handler:EventHandlerService, private router:Router){}

  // Function to update the event
  update() {

    // declaring formdata instead of sending directly an event
    // for the sole purpose of sending an image to backend
    let formdata= new FormData();

    // Check if a new image is selected
    if (this.image) {
      formdata.append('image', this.image); // Adding the image to the form data
    }

    // Adding event details to the form data
    formdata.append('startDate',this.event.startDate);
    formdata.append('startTime',this.event.startTime);
    formdata.append('name',this.event.name);
    formdata.append('place',this.event.place);
    formdata.append('state',this.event.state);
    formdata.append('category',this.event.category);
    formdata.append('description',this.event.description);
    formdata.append('insideUniversity',this.event.insideUniversity);
    formdata.append('locationLink',this.event.locationLink);

    // Calling the updateEvent method from the EventHandlerService
    this.event_handler.updateEvent(this.id, formdata)
      .subscribe(
        res=>{
          console.log(res); // Logging the response
          this.router.navigate(['/']); // Navigating back to the home route after updating
        },
        err=>{
          console.log(err); // Logging any errors
        }
      );
  }

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
