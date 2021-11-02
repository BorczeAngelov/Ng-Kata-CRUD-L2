import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { combineLatest, merge, Observable, of, throwError } from 'rxjs';
import { catchError, map, shareReplay, tap } from 'rxjs/operators';
import { Customer } from '../data/customer';
import { CustomerWithProduct } from '../data/customerWithProduct';
import { ProductService } from '../product-crud/product.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private url = 'api/customers';

  constructor(
    private http: HttpClient,
    private productService: ProductService) { }

  customers$ = this.http.get<Customer[]>(this.url)
    .pipe(
      tap(data => console.log('Customers', JSON.stringify(data))),
      catchError(this.handleError)
    );

  customersWithProduct$ = combineLatest([
    this.customers$,
    this.productService.getProducts()
  ]).pipe(
    map(([customers, products]) => {

      let helper = customers.map(customer => ({
        ...customer,
        productName: products.find(p => customer.productId === p.id)?.name
      }) as CustomerWithProduct)

      return helper;
    })
  );

  private handleError(err: any) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }
}
