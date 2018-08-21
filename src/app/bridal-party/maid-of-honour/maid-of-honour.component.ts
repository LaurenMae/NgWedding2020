import { Component, OnInit } from '@angular/core';

interface Role {
  name: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-maid-of-honour',
  templateUrl: './maid-of-honour.component.html',
  styleUrls: ['./maid-of-honour.component.css']
})
export class MaidOfHonourComponent implements OnInit {
  public maidOfHonour: Role = {
    name: 'Natalie Pearson',
    image: 'assets/Natalie.jpg',
    description: 'Friend of the Bride'
  };

  constructor() { }

  ngOnInit() {
  }

}
