import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEventComponent } from './create-event/create-event.component';
import { MainComponent } from './main/main.component';
import { CreatePhysicalEventComponent } from './create-physical-event/create-physical-event.component';
import { CreateVirtualEventComponent } from './create-virtual-event/create-virtual-event.component';
import { UpdatePhysicalEventComponent } from './update-physical-event/update-physical-event.component';
import { UpdateVirtualEventComponent } from './update-virtual-event/update-virtual-event.component';
import { PhysicalEventDetailsComponent } from './physical-event-details/physical-event-details.component';
import { VirtualEventDetailsComponent } from './virtual-event-details/virtual-event-details.component';

const routes: Routes = [
  {path: 'add', component:CreateEventComponent},
  {path: 'physical', component:CreatePhysicalEventComponent},
  {path: 'virtual', component:CreateVirtualEventComponent},
  {path:'detailsPhysical/:id', component:PhysicalEventDetailsComponent},
  {path:'detailsVirtual/:id', component:VirtualEventDetailsComponent},
  {path: 'updatePhysical/:id', component:UpdatePhysicalEventComponent},
  {path: 'updateVirtual/:id', component:UpdateVirtualEventComponent},
  {path: '', component: MainComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
