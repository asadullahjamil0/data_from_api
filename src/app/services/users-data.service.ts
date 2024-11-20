import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  constructor(private http: HttpClient) { }

  // URL to the API endpoint
  random = Math.floor(Math.random() * 100 + 1);
  url = `https://jsonplaceholder.typicode.com/todos/${this.random}`;

  // Method to make HTTP GET request
  user() {
    return this.http.get(this.url);
  }
}
