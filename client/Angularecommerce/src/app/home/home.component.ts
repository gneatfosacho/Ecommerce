//Homecomponent.ts - Type Script file that contains code to render home page  to elearning application

//including the required files and services
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { RestApiService } from '../rest-api.service';

//component specific details 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

//Exporting the HomeComponent 
export class HomeComponent implements OnInit {
  products: any;

  constructor(private data: DataService, private rest: RestApiService) {}

  async ngOnInit() {
    try {
      const data = await this.rest.get('http://localhost:3030/api/products');
      data['success']
        ? (this.products = data['products'])
        : this.data.error('Could not fetch products.');
    } catch (error) {
      this.data.error(error['message']);
    }
  }
}
