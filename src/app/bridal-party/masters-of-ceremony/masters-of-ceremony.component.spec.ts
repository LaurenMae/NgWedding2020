import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MastersOfCeremonyComponent } from './masters-of-ceremony.component';

describe('MastersOfCeremonyComponent', () => {
  let component: MastersOfCeremonyComponent;
  let fixture: ComponentFixture<MastersOfCeremonyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MastersOfCeremonyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MastersOfCeremonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
