//app-routing.module.ts- Module which handles various routes in  learning client application ///

//including required services and modules 
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsComponent } from './settings/settings.component';
import { AddressComponent } from './address/address.component';
import { CategoriesComponent } from './categories/categories.component';
import { PostProductComponent } from './post-product/post-product.component';
import { MyProductsComponent } from './my-products/my-products.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { SearchComponent } from './search/search.component';
import { CartComponent } from './cart/cart.component';
import { MyordersComponent} from './myorders/myorders.component';
import { OrderdetailsComponent} from './orderdetails/orderdetails.component';

import { AuthGuardService } from './auth-guard.service';


//assigning all possible routes to variable 
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'categories',
    component: CategoriesComponent,
  },
  {
    path: 'categories/:id',
    component: CategoryComponent,
  },
  {
    path: 'product/:id',
    component: ProductComponent,
  },
  {
    path: 'orders/:id',
    component: OrderdetailsComponent,
  },
  {
    path: 'register',
    component: RegistrationComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'profile/settings',
    component: SettingsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'profile/address',
    component: AddressComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'profile/postproduct',
    component: PostProductComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'profile/myproducts',
    component: MyProductsComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'profile/orders',
    component: MyordersComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: '**',
    redirectTo: '',
  },
];

//decorator to import and export routing Module in the application 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
