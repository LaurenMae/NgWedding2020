import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderOfServiceComponent } from './order-of-service.component';

describe('OrderOfServiceComponent', () => {
  let component: OrderOfServiceComponent;
  let fixture: ComponentFixture<OrderOfServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderOfServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderOfServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
