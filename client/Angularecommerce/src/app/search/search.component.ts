//Search component.ts - Type Script file that contains code to render seareched products to elearning application

//including the required files and services
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { RestApiService } from '../rest-api.service';

//component specific details 
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})

//exporting Serach Component
export class SearchComponent implements OnInit {
  query: string;
  page = 1;

  content: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private data: DataService,
    private rest: RestApiService,
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(res => {
      this.query = res['query'];
      this.page = 1;
      this.getProducts();
    });
  }

  get lower() {
    return 1 + this.content.hitsPerPage * this.content.page;
  }

  get upper() {
    return Math.min(
      this.content.hitsPerPage * (this.content.page + 1),
      this.content.nbHits,
    );
  }

  async getProducts() {
    this.content = null;
    try {
      const data = await this.rest.get(
        `http://localhost:3030/api/search?query=${this.query}&page=${this.page -
          1}`,
      );
      data['success']
        ? (this.content = data['content'])
        : this.data.error(data['message']);
    } catch (error) {
      this.data.error(error['message']);
    }
  }
}
