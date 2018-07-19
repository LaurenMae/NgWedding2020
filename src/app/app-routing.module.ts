import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {GiftsComponent} from './gifts/gifts.component';
import {HotelsComponent} from './hotels/hotels.component';
import {HomeComponent} from './home.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Gifts', component: GiftsComponent },
  { path: 'Hotels', component: HotelsComponent },
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
