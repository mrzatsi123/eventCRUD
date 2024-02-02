import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { FormsModule } from '@angular/forms';
import { CreatePhysicalEventComponent } from './create-physical-event/create-physical-event.component';
import { CreateVirtualEventComponent } from './create-virtual-event/create-virtual-event.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdatePhysicalEventComponent } from './update-physical-event/update-physical-event.component';
import { UpdateVirtualEventComponent } from './update-virtual-event/update-virtual-event.component';
import { PhysicalEventDetailsComponent } from './physical-event-details/physical-event-details.component';
import { VirtualEventDetailsComponent } from './virtual-event-details/virtual-event-details.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CreateEventComponent,
    CreatePhysicalEventComponent,
    CreateVirtualEventComponent,
    UpdatePhysicalEventComponent,
    UpdateVirtualEventComponent,
    PhysicalEventDetailsComponent,
    VirtualEventDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, // Importing HttpClientModule for HTTP requests
    NgbModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
