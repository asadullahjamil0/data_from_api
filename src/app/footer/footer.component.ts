import { Component } from '@angular/core';
import { UsersDataService } from '../services/users-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  item: any;
  constructor(private userData: UsersDataService) { }
  // Method to trigger API request
  users() {
    this.userData.user().subscribe((data) => {
      console.log(data);  // Log the response
      this.item = data;  // Store the data into item
    });
  }

}
