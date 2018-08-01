import { Component, OnInit } from '@angular/core';

interface Role {
  name: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-bridesmaids',
  templateUrl: './bridesmaids.component.html',
  styleUrls: ['./bridesmaids.component.css']
})
export class BridesmaidsComponent implements OnInit {
  public bridesmaids: Array<Role> = [
    {
      image: 'assets/Eleanor.jpg',
      name: 'Eleanor Welsh',
      description: 'Sister of the Bride'
    },
    {
      image: 'assets/Kathryn.jpg',
      name: 'Kathryn Welsh',
      description: 'Sister of the Bride'
    },
    {
      image: 'assets/Emily.jpg',
      name: 'Emily Morris',
      description: 'Sister of the Groom'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
