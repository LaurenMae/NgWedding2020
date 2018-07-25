import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaidOfHonourComponent } from './maid-of-honour.component';

describe('MaidOfHonourComponent', () => {
  let component: MaidOfHonourComponent;
  let fixture: ComponentFixture<MaidOfHonourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaidOfHonourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaidOfHonourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
