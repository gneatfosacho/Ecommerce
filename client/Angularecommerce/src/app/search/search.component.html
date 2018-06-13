<section id="search">
  <div class="container p-3 p-md-5">
    <app-message></app-message>
    <div *ngIf="!content" class="m-auto">
      <h1 class="text-center display-3 mt-5">
        <i class="fa fa-spinner fa-spin"></i>
      </h1>
    </div>
    <h3 *ngIf="content && !content.nbHits" class="display-2 text-center mt-5">No Results</h3>
    <div *ngIf="content && content.nbHits">
      <p>{{ lower }}-{{ upper }} of {{ content.nbHits }} results for
        <span class="text-warning">"{{ query }}"</span>
      </p>
      <hr>
      <div class="product" *ngFor="let product of content.hits">
        <div class="row">
          <div class="col-5 col-md-2">
            <a routerLink="/product/{{ product.objectID }}">
              <img [src]="product.image" alt="productImage" class="img-fluid img-thumbnail">
            </a>
          </div>
          <div class="col-5 col-md-8">
            <div class="row">
              <div class="col-12 col-md-6">
                <h5>
                  <a routerLink="/product/{{ product.objectID }}">{{ product.title }}</a>
                </h5>
                <p>
                  <small>by {{ product.owner.name }}</small>
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
      <ngb-pagination [collectionSize]="content.nbHits" [pageSize]="20" [(page)]="page" (pageChange)="getProducts()"></ngb-pagination>
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
