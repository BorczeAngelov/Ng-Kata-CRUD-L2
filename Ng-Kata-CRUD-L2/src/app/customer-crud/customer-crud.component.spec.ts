import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCRUDComponent } from './customer-crud.component';

describe('CustomerCRUDComponent', () => {
  let component: CustomerCRUDComponent;
  let fixture: ComponentFixture<CustomerCRUDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerCRUDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCRUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
