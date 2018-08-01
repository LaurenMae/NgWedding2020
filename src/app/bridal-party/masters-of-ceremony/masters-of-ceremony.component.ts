import { Component, OnInit } from '@angular/core';

interface Role {
  name: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-masters-of-ceremony',
  templateUrl: './masters-of-ceremony.component.html',
  styleUrls: ['./masters-of-ceremony.component.css']
})
export class MastersOfCeremonyComponent implements OnInit {
  public ceremonies: Array<Role> = [
    {
      image: 'assets/Richard.jpg',
      name: 'Richard Bennett',
      description: 'Friend of the Bride'
    },
    {
      image: 'assets/Scott.jpg',
      name: 'Scott Carter',
      description: 'Friend of the Groom'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
