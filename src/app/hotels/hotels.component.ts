import { Component, OnInit } from '@angular/core';

interface Hotel {
  name: string;
  description: string;
  image: string;
  imageWidth: string;
}

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  public hotels: Array<Hotel> = [
    {
      image: 'assets/Llanerch-3.jpg',
      name: 'Llanerch Vinyard',
      imageWidth: '80%',
      description: '5 minute taxi or 20 minute walk from the venue. Please organise bookings individually.'
    },
    {
      image: 'assets/theVale.jpg',
      name: 'The Vale Resort',
      imageWidth: '85%',
      description: 'Free shuttle to and from the venue. Contact bride and groom regarding booking.'
    },
    {
      image: 'assets/PremierInn.jpg',
      name: 'Llantrisant Inn',
      imageWidth: '92%',
      description: '15 minute taxi ride from the venue. Please organise bookings individually.'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
