import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {GiftsComponent} from './gifts/gifts.component';
import {HotelsComponent} from './hotels/hotels.component';
import {HomeComponent} from './home.component';
import {BridesmaidsComponent} from './bridal-party/bridesmaids/bridesmaids.component';
import {MaidOfHonourComponent} from './bridal-party/maid-of-honour/maid-of-honour.component';
import {GroomsmenComponent} from './bridal-party/groomsmen/groomsmen.component';
import {MastersOfCeremonyComponent} from './bridal-party/masters-of-ceremony/masters-of-ceremony.component';
import {MenuComponent} from './the-big-day/menu/menu.component';
import {RsvpComponent} from './rsvp/rsvp.component';
<<<<<<< HEAD
import {OurStoryComponent} from './our-story/our-story.component';
=======
import {OrderOfServiceComponent} from './the-big-day/order-of-service/order-of-service.component';
import {DirectionsComponent} from './the-big-day/directions/directions.component';
import {ParkingComponent} from './the-big-day/parking/parking.component';
>>>>>>> master

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Gifts', component: GiftsComponent },
  { path: 'Hotels', component: HotelsComponent },
  { path: 'Bridesmaids', component: BridesmaidsComponent },
  { path: 'Maid of Honour', redirectTo: '/MaidOfHonour', pathMatch: 'full' },
  { path: 'MaidOfHonour', component: MaidOfHonourComponent },
  { path: 'Groomsmen', component: GroomsmenComponent },
  { path: 'Masters of Ceremony', redirectTo: 'MastersOfCeremony', pathMatch: 'full' },
  { path: 'MastersOfCeremony', component: MastersOfCeremonyComponent },
  { path: 'Menu', component: MenuComponent },
  { path: 'RSVP', component: RsvpComponent },
<<<<<<< HEAD
  { path: 'Our Story', redirectTo: 'OurStory', pathMatch: 'full' },
  { path: 'OurStory', component: OurStoryComponent }
=======
  { path: 'Order of Service', redirectTo: '/OrderOfService', pathMatch: 'full' },
  { path: 'OrderOfService', component: OrderOfServiceComponent },
  { path: 'Directions', component: DirectionsComponent },
  { path: 'Parking', component: ParkingComponent }
>>>>>>> master
];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
