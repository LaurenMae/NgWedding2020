import { Component, OnInit } from '@angular/core';

interface Event {
  listItem: string;
  date: string;
  image: string;
  detail: string;
}

@Component({
  selector: 'app-our-story',
  templateUrl: './our-story.component.html',
  styleUrls: ['./our-story.component.css']
})
export class OurStoryComponent implements OnInit {
  static nextClickCount: number;
  static previousClickCount: number;

  public selectedEvent: Event;

  constructor() {
    OurStoryComponent.nextClickCount = 0;
    OurStoryComponent.previousClickCount = 0;
  }

  ngOnInit() {
  }

  getEvents(): Array<Event> {
    return [
      {
        listItem: '25 Sept 11',
        date: '25th September 2011',
        image: 'assets/cardiffUni.jpg',
        detail: 'They meet at Cardiff University'
      },
      {
        listItem: '16 Nov 12',
        date: '16th November 2012',
        image: 'assets/rugby-ball.jpg',
        detail: 'Jamie takes Lauren on their first date, Wales Vs Samoa - Samoa wins!'
      },
      {
        listItem: '12 Jun 12',
        date: '12th June 2012',
        image: 'assets/airplane-icon-png-2497.png',
        detail: 'Jamie and Lauren go on their first holiday to Tunisia'
      },
      {
        listItem: '13 Jul 15',
        date: '13th July 2015',
        image: 'assets/graduation-cap.svg',
        detail: 'Jamie and Lauren graduate Cardiff University - with First Class Honours!'
      },
      {
        listItem: '08 Jan 16',
        date: '8th January 2016',
        image: 'assets/house.png',
        detail: 'Jamie and Lauren purchase their first home together'
      },
      {
        listItem: '01 Apr 18',
        date: '1st April 2018',
        image: 'assets/proposal.png',
        detail: 'Jamie takes Lauren to Paris and pops the question - she said yes!'
      }
    ];
  }

  viewEvent(event: Event): void {
    this.selectedEvent = event;
  }

  scroll(direction: String): void {
    const timelineElement: HTMLElement = document.getElementById('timeline_view');
    const elementStyle = window.getComputedStyle(timelineElement);
    const styleMatrix = new WebKitCSSMatrix(elementStyle.webkitTransform);
    const currentPosition = styleMatrix.m41 || 0;
    const translateUnit = 280;
    let translateX: number;

    if (direction === 'right') {
      translateX = currentPosition - (translateUnit * (OurStoryComponent.nextClickCount + 1));
      OurStoryComponent.nextClickCount++;
    }
    if (direction === 'left') {
      translateX = currentPosition + (translateUnit * (OurStoryComponent.previousClickCount + 1));
      OurStoryComponent.previousClickCount++;
    }
    timelineElement.style.transform = 'translate(' + translateX + 'px)';
  }
  // TODO limit the scrolling when at the start/end of the timeline
  // TODO disable prev/next buttons
}
