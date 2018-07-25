import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BridalPartyComponent } from './bridal-party.component';

describe('BridalPartyComponent', () => {
  let component: BridalPartyComponent;
  let fixture: ComponentFixture<BridalPartyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BridalPartyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BridalPartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
