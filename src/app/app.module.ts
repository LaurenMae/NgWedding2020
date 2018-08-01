import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HotelsComponent } from './hotels/hotels.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GiftsComponent } from './gifts/gifts.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home.component';
import { BridalPartyComponent } from './bridal-party/bridal-party.component';
import { MaidOfHonourComponent } from './bridal-party/maid-of-honour/maid-of-honour.component';
import { BridesmaidsComponent } from './bridal-party/bridesmaids/bridesmaids.component';
import { GroomsmenComponent } from './bridal-party/groomsmen/groomsmen.component';
import { MastersOfCeremonyComponent } from './bridal-party/masters-of-ceremony/masters-of-ceremony.component';
import { MenuComponent } from './menu/menu.component';
import { RsvpComponent } from './rsvp/rsvp.component';
import {OurStoryComponent} from './our-story/our-story.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HotelsComponent,
    GiftsComponent,
    HomeComponent,
    BridalPartyComponent,
    MaidOfHonourComponent,
    BridesmaidsComponent,
    GroomsmenComponent,
    MastersOfCeremonyComponent,
    MenuComponent,
    RsvpComponent,
    OurStoryComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
