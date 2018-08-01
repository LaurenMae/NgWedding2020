import { Component, OnInit } from '@angular/core';

interface Role {
  name: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-groomsmen',
  templateUrl: './groomsmen.component.html',
  styleUrls: ['./groomsmen.component.css']
})
export class GroomsmenComponent implements OnInit {
  public groomsmen: Array<Role> = [
    {
      image: 'assets/Geraint.jpg',
      name: 'Geraint Stone',
      description: 'Friend of the Groom'
    },
    {
      image: 'assets/Alex.jpg',
      name: 'Alex Howells',
      description: 'Friend of the Groom'
    },
    {
      image: 'assets/Callum.jpg',
      name: 'Callum Welfoot',
      description: 'Friend of the Groom'
    },
    {
      image: 'assets/Ellis.jpg',
      name: 'Ellis Millard',
      description: 'Friend of the Groom'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
