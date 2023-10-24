
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
    providedIn: 'root',
})


export class AppService {
    apiUrl: string = 'https://jsonplaceholder.typicode.com/todos';

    constructor(
        private http: HttpClient
    ) { }

    get() {
        return this.http.get(`${this.apiUrl}`);
    }

}
