<section id="cart">
  <div class="container-fluid p-5">
    <app-message></app-message>
    <h3 *ngIf="!cartItems.length" class="display-2 text-center mt-5">Cart is Empty</h3>
    <div *ngIf="cartItems.length" class="row">
      <div class="col-md-9">
        <p class="lead font-weight-bold">Shopping Cart</p>
        <div class="row">
          <div class="offset-8 col-2 d-none d-md-block">
            <p>
              <small class="text-muted">Price</small>
            </p>
          </div>
          <div class="col-2 d-none d-md-block">
            <p>
              <small class="text-muted">Quantity</small>
            </p>
          </div>
        </div>
        <hr class="mt-0">
        <div *ngFor="let item of cartItems; let i=index; trackBy: trackByCartItems;" class="cartItem">
          <div class="row">
            <div class="col-4 col-md-2">
              <a routerLink="/product/{{ item._id }}">
                <img src="{{ item.image }}" alt="productImage" class="img-fluid img-thumbnail">
              </a>
            </div>
            <div class="col-5 col-md-6">
              <h5>
                <a routerLink="/product/{{ item._id }}">{{ item.title }}</a>
              </h5>
              <p class="m-0">
                <small class="text-muted">{{ item.owner.name }}</small>
              </p>
              <p class="m-0">
                <small class="text-muted">{{ item.category.name }}</small>
              </p>
              <a class="text-danger" (click)="removeProduct(i, item)">Delete</a>
            </div>
            <div class="col-1 col-md-2">
              <h6 class="font-weight-bold text-danger">{{ item.price | currency }}</h6>
            </div>
            <div class="col-1 mt-5 mt-md-0 p-0">
              <input type="number" class="form-control" min="1" max="99" [(ngModel)]="quantities[i]">
            </div>
          </div>
          <hr>
        </div>
        <h5 class="text-right">Total:
          <span class="ml-1 font-weight-bold text-danger">{{ cartTotal | currency }}</span>
        </h5>
      </div>
      <div class="col-md-3">
        <div class="card bg-light">
          <div class="card-body">
            <h5>Total:
              <span class="ml-1 font-weight-bold text-danger">{{ cartTotal | currency }}</span>
            </h5>
            <br>
            <button class="btn btn-warning btn-block" (click)="checkout()" [disabled]="btnDisabled">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
