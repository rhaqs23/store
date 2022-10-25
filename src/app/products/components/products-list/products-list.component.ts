import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
  providers: [ProductService]
})
export class ViewProductsComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  products: any[] = []
  searchKey = '';

  constructor(
    private productService: ProductService,
    private router: Router
  ) { }
 

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    const subscription: Subscription = this.productService.getAllData().subscribe(
      (res: any) => {
        this.products = res.products;
        console.log(this.products);
      }
    );
    this.subscriptions.push(subscription);
  }

  search() {
    console.log(this.searchKey);
    const subscription: Subscription = this.productService.searchProduct(this.searchKey).subscribe(
      (res: any) => {
        this.products = res.products;
        console.log(this.products);
      }
    );
    this.subscriptions.push(subscription);
  }

  goBack() {
    this.router.navigate(['../']);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }
}
