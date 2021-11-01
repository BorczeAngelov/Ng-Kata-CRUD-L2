import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
    providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {

    createDb() {
        const dummyData_01: string[] = [
            "test 01",
            "test 02"
        ]

        const dummyData_02: string[] = [
            "test2 01",
            "test2 02"
        ]

        return { dummyData_01, dummyData_02 };
    }
}