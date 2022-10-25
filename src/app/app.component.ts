import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'store';
  constructor(public route: Router) {}

  viewProducts(){
    this.route.navigate(['./products/products-list']);
  }

  addProducts() {
    this.route.navigate(['./products/add-edit-product/new']);
  }
}
