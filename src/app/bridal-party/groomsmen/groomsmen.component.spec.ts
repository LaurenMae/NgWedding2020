import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroomsmenComponent } from './groomsmen.component';

describe('GroomsmenComponent', () => {
  let component: GroomsmenComponent;
  let fixture: ComponentFixture<GroomsmenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroomsmenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroomsmenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
