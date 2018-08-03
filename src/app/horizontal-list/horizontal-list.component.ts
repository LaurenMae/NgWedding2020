import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-horizontal-list',
  templateUrl: './horizontal-list.component.html',
  styleUrls: ['./horizontal-list.component.css']
})
export class HorizontalListComponent implements OnInit {
  @Input() listItem: any;
  @Input() transform: string;
  @Input() imageWidth?: string;

  constructor() {
  }

  ngOnInit() {
  }
}
