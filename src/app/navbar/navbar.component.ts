import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  const navbarItems: Array<String> = [
    'Our Story',
    'Hotels',
    'RSVP',
    'Gifts',
    'Food Menu'
  ];

  const bridalParty: Array<String> = [
    'Maid of Honour',
    'Best Man',
    'Bridesmaids',
    'Groomsmen',
    'Masters of Ceremony'
  ];

  const route: string = '';

  constructor(location: Location, router: Router) {
    router.events.subscribe((val) => {
      if(location.path() != ''){
        this.route = location.path().replace('/', '');
      } else {
        this.route = 'Home';
      }
    });
  }

  ngOnInit() {
  }

}
