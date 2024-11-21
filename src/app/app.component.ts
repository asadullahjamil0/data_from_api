import { Component } from '@angular/core';
import { UsersDataService } from './services/users-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data_from_api';
  item: any;

  constructor(private userData: UsersDataService) {

  }

  // Method to trigger API request
  users() {
    this.userData.user().subscribe((data) => {
      console.log(data);  // Log the response
      this.item = data;  // Store the data into item
    });
  }
  userFormData(data: any) {
    this.userData.postUser(data).subscribe((results) => {
      console.log(results);
    })
  }
}
