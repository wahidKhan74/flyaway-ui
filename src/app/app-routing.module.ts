import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path:"flight", loadChildren:()=> import('./flights/flights.module').then(m => m.FlightsModule)},
  { path:"booking", loadChildren:()=> import('./booking/booking.module').then(m => m.BookingModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
