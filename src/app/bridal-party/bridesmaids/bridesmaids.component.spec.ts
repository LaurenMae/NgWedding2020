import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BridesmaidsComponent } from './bridesmaids.component';

describe('BridesmaidsComponent', () => {
  let component: BridesmaidsComponent;
  let fixture: ComponentFixture<BridesmaidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BridesmaidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BridesmaidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
