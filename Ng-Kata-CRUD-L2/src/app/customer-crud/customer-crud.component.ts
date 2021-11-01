import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomerWithProduct } from '../data/customerWithProduct';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer-crud',
  templateUrl: './customer-crud.component.html',
  styleUrls: ['./customer-crud.component.css']
})
export class CustomerCRUDComponent implements OnInit {
  
  customersWithProduct$: Observable<CustomerWithProduct[]> | undefined;

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {

    this.customersWithProduct$ = this.customerService.getCustomersWithProduct();

  }

}
