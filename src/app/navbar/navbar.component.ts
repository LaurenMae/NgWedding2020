import { Component, OnInit } from '@angular/core';

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
    'Bridal Party',
    'Food Menu'
  ];
  constructor() { }

  ngOnInit() {
  }

}
