//my-orders component.ts - Type Script file that contains code to render orders to elearning application

//including the required files and services
import { Component, OnInit } from '@angular/core';

import { RestApiService } from '../rest-api.service';
import { DataService } from '../data.service';

//component specific details 
@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.scss']
})

//exporting orders component 
export class MyordersComponent implements OnInit {

 myorders: any;

  constructor(private data: DataService, private rest: RestApiService) { }

  async ngOnInit() {
    try {
      const data = await this.rest.get(
        'http://localhost:3030/api/accounts/orders'
      );
      data['success']
        ? (this.myorders = data['orders'])
        : this.data.error(data['message']);
    } catch (error) {
      this.data.error(error['message']);
    }
  }

}
