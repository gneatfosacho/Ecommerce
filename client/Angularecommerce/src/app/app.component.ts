//app.component.ts- TypeScript file which facilitates authorization and provides logout and search functionality to e learning client application ///


//including required services and modules 
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';

//Component specific details 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

//exporting the AppComponnet for reuse 
export class AppComponent {
  searchTerm = '';
  isCollapsed = true;

  constructor(private router: Router, private data: DataService) {
    this.data.cartItems = this.data.getCart().length;
    this.data.getProfile();
  }

  get token() {
    return localStorage.getItem('token');
  }

  collapse() {
    this.isCollapsed = true;
  }

  closeDropdown(dropdown) {
    dropdown.close();
  }

  logout() {
    this.data.user = {};
    this.data.cartItems = 0;
    localStorage.clear();
    this.router.navigate(['']);
  }

  search() {
    if (this.searchTerm) {
      this.collapse();
      this.router.navigate(['search', { query: this.searchTerm }]);
    }
  }
}
