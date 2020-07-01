import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details/details.component';
import { SearchComponent } from './search/search.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path:"", component: SearchComponent},
  { path:"detail", component: DetailsComponent},
]

@NgModule({
  declarations: [DetailsComponent,SearchComponent],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class FlightsModule { }
