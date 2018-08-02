import { Component, OnInit, Input } from '@angular/core';

// TODO rename this component to be more generic to lists

interface Role {
  name: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  @Input() role: Role;
  @Input() transform: string;
  @Input() imageWidth?: string;

  constructor() {
  }

  ngOnInit() {
  }
}
