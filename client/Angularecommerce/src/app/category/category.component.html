<section id="category">
  <div class="container p-3 p-md-5">
    <app-message></app-message>
    <div *ngIf="!category" class="m-auto">
      <h1 class="text-center display-3 mt-5">
        <i class="fa fa-spinner fa-spin"></i>
      </h1>
    </div>
    <h3 *ngIf="category && !category.products.length" class="display-2 text-center mt-5">No Products inside Category</h3>
    <div *ngIf="category && category.products.length">
      <p>{{ lower }}-{{ upper }} of {{ category.totalProducts }} products in {{ category.categoryName }}</p>
      <hr>
      <div class="product" *ngFor="let product of category.products">
        <div class="row">
          <div class="col-5 col-md-2">
            <a routerLink="/product/{{ product._id }}">
              <img [src]="product.image" alt="productImage" class="img-fluid img-thumbnail">
            </a>
          </div>
          <div class="col-5 col-md-8">
            <div class="row">
              <div class="col-12 col-md-6">
                <h5>
                  <a routerLink="/product/{{ product._id }}">{{ product.title }}</a>
                </h5>
                <p>
                  <small class="text-muted">{{ product.category.id }}</small>
                </p>
                <p>{{ product.price | currency }}</p>
              </div>
              <div class="col-md-6">
                <ngb-rating [(rate)]="product.averageRating" [starTemplate]="t" [readonly]="true" max="5"></ngb-rating>
              </div>
            </div>
          </div>
        </div>
        <hr>
      </div>
      <ngb-pagination [collectionSize]="category.totalProducts" [pageSize]="10" [(page)]="page" (pageChange)="getProducts($event)"></ngb-pagination>
    </div>
  </div>
</section>

<ng-template #t let-fill="fill">
  <span *ngIf="fill === 100" class="star full">&#9733;</span>
  <span *ngIf="fill === 0" class="star">&#9733;</span>
  <span *ngIf="fill < 100 && fill > 0" class="star">
    <span class="half" [style.width.%]="fill">&#9733;</span>&#9733;
  </span>
</ng-template>
