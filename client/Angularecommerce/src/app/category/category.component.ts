//Category component.ts - Type Script file that contains code to render Category  to elearning application


//including the required files and services
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { RestApiService } from '../rest-api.service';
import { DataService } from '../data.service';


//component specifc details 
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})

//exporting the category component 
export class CategoryComponent implements OnInit {
  categoryId: any;
  category: any;
  page = 1;

  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute,
    private rest: RestApiService,
  ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(res => {
      this.categoryId = res['id'];
      this.getProducts();
    });
  }

  get lower() {
    return 10 * (this.page - 1) + 1;
  }

  get upper() {
    return Math.min(10 * this.page, this.category.totalProducts);
  }

  async getProducts(event?: any) {
    if (event) {
      this.category = null;
    }
    try {
      const data = await this.rest.get(
        `http://localhost:3030/api/categories/${this.categoryId}?page=${this
          .page - 1}`,
      );
      data['success']
        ? (this.category = data)
        : this.data.error(data['message']);
    } catch (error) {
      this.data.error(error['message']);
    }
  }
}
