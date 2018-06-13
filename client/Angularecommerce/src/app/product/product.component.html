<section id="product">
  <div class="container-fluid p-5">
    <app-message></app-message>
    <div *ngIf="!product" class="m-auto">
      <h1 class="text-center display-3 mt-5">
        <i class="fa fa-spinner fa-spin"></i>
      </h1>
    </div>
    <div *ngIf="product">
      <div class="row">
        <div class="col-lg-4">
          <img [src]="product.image" alt="productImage" class="image img-thumbnail">
        </div>
        <div class="col-lg-5">
          <div class="row">
            <div class="col-6">
              <h4>{{ product.title }}</h4>
              <p class="m-0">
                <small>by {{ product.owner.name }}</small>
              </p>
              <p class="m-0">
                <small class="text-muted">{{ product.category.name }}</small>
              </p>
            </div>
            <div class="col-6">
              <ngb-rating [(rate)]="product.averageRating" [starTemplate]="t" [readonly]="true" max="5"></ngb-rating>
            </div>
          </div>
          <hr>
          <p class="lead">{{ product.description }}</p>
        </div>
        <div class="col-lg-3">
          <div class="card bg-light">
            <div class="card-body">
              <h5 class="card-title">Price: {{ product.price | currency }}</h5>
              <br>
              <br>
              <a class="btn btn-warning btn-block" (click)="addToCart()">Add to Cart</a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="mt-5 ml-lg-5">
          <h4>Reviews</h4>
          <hr>
          <div class="reviews">
            <div *ngFor="let review of product.reviews" class="review">
              <div class="p-3">
                <img [src]="review.owner.picture" alt="" width="75px" class="rounded-circle">
                <p class="lead d-inline ml-3">{{ review.owner.name }}</p>
                <br>
                <br>
                <ngb-rating [(rate)]="review.rating" [starTemplate]="t" [readonly]="true" max="5"></ngb-rating>
                <p class="ml-2 d-inline font-weight-bold">{{ review.title }}</p>
                <p class="mt-3">{{ review.description }}</p>
              </div>
              <hr>
            </div>
            <div class="card bg-light my-5">
              <div class="card-body">
                <h4 class="card-title">Add a review</h4>
                <hr>
                <div class="form">
                  <div class="form-group">
                    <label>Title</label>
                    <input type="text" name="title" class="form-control" [(ngModel)]="myReview.title">
                  </div>
                  <div class="form-group">
                    <label>Description</label>
                    <textarea class="form-control" rows="5" name="description" [(ngModel)]="myReview.description"></textarea>
                  </div>
                  <label>Rating</label>
                  <br>
                  <ngb-rating [(rate)]="myReview.rating" [starTemplate]="t" [readonly]="false" max="5"></ngb-rating>
                  <br>
                  <br>
                  <button type="button" class="btn btn-info" (click)="postReview()" [disabled]="btnDisabled">Post Review</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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
