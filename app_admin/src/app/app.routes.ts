import { Routes } from '@angular/router';
import { AddTripComponent } from './add-trip/add-trip.component';
import { TripListingComponent } from './trip-listing/trip-listing.component';
import { EditTripComponent } from './edit-trip/edit-trip.component';

export const routes: Routes = [
  { path: 'add-trip', component: AddTripComponent },
  { path: '', component: TripListingComponent, pathMatch: 'full' },
  { path: 'edit-trip', component: EditTripComponent },
];
