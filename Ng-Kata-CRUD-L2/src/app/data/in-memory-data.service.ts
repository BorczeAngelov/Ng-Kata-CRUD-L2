import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Customer } from './customer';
import { Product } from './product';

@Injectable({
    providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

    createDb() {
        const customers: Customer[] = [
            { id: 1, name: "Aleks", productId: 1 },
            { id: 2, name: "Sara", productId: 2 }
        ]

        const products: Product[] = [
            { id: 1, name: "TV" },
            { id: 2, name: "iPhone" }
        ]

        return { customers, products };
    }
}