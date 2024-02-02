import { EventEmitter, Injectable } from '@angular/core'; // Importing EventEmitter and Injectable from Angular core
import { HttpClient } from '@angular/common/http'; // Importing HttpClient for HTTP requests

// decoration Injectable so it can be accessed from
// any component in which it's injected
@Injectable({
  providedIn: 'root',
})

export class EventHandlerService {

  // EventEmitter to emit events after creation
  myEventEmitter: EventEmitter<void> = new EventEmitter<void>();

  constructor(private http: HttpClient) {} // Constructor with HttpClient injection
  private url = 'http://127.0.0.1:3000/'; // Base URL for RESTapi requests

  //
  //CRUD event
  //

  // Method to create a new event
  createNewEvent (event: any){
    return this.http.post(this.url + 'event/add', event); // Sending a POST request to add a new event
  }

  // Method to get all events
  getAllEvents () {
    return this.http.get(this.url + 'event/all'); // Sending a GET request to fetch all events
  }

  // Method to delete an event by ID
  deleteEvent(id:any){
    return this.http.delete(this.url +'event/delete/' +id); // Sending a DELETE request to delete an event
  }

  // Method to get an event by ID
  getEventById(id: any){
    return this.http.get(this.url + 'event/getbyid/'+id); // Sending a GET request to fetch an event by ID
  }

  // Method to update an event by ID
  updateEvent(id:any, event:any){
    return this.http.put(this.url+'event/update/'+id, event); // Sending a PUT request to update an event by ID
  }
  //
  // End of CRUD
  //

  image:any; // Variable to store the image
  event: any = { // Object to store event details
    name: '',
    description: '',
    category: '',
    type: '',
    insideUniversity: undefined,
    state: '',
    place: '',
    locationLink: '',
    locationDesciption: '',
    appName: '',
    appLink: '',
    startDate: '',
    startTime: ''
  };

  // Method to submit an event
  submitEvent(): void {
    let eventFormData = new FormData(); // Creating a new FormData object

    // Appending common properties to FormData
    eventFormData.append('image', this.image);
    eventFormData.append('name', this.event.name);
    eventFormData.append('description', this.event.description);
    eventFormData.append('category', this.event.category);
    eventFormData.append('type', this.event.type);
    eventFormData.append('startDate', this.event.startDate);
    eventFormData.append('startTime', this.event.startTime);

    // Checking the event type and appending properties accordingly
    if (this.event.type === 'physical') {
      eventFormData.append('insideUniversity', this.event.insideUniversity);
      eventFormData.append('state', this.event.state);
      eventFormData.append('place', this.event.place);
      eventFormData.append('locationLink', this.event.locationLink);
      eventFormData.append('locationDescription', this.event.locationDescription);
    } else if (this.event.type === 'virtual') {
      eventFormData.append('appName', this.event.appName);
      eventFormData.append('appLink', this.event.appLink);
    }

    //
    // Logging FormData for debugging
    //

    // const formDataObject: { [key: string]: any } = {};
    // eventFormData.forEach((value, key) => {
    //   formDataObject[key] = value;
    // });
    // console.log('FormData sent:', formDataObject);

    //
    //
    //

    // Sending a POST request to create a new event
    this.createNewEvent(eventFormData)
      .subscribe(
        res => {
          console.log('Response:', res); // Logging the response
          eventFormData = new FormData(); // Clearing FormData after successful submission
        },
        err => {
          console.error('Error:', err); // Logging any errors
        }
      );

    // Resetting form fields and image after submission
    this.resetForm();
  }

  // Method to reset form fields and image
  resetForm(): void {
    this.event = {
      name: '',
      description: '',
      category: '',
      type: '',
      insideUniversity: undefined,
      state: '',
      place: '',
      locationLink: '',
      locationDesciption: '',
      appName: '',
      appLink: '',
      startDate: '',
      startTime: ''
    };
    this.image = undefined;
  }
}
