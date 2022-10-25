import { OnDestroy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import  { Product } from '../../models/product';
import { ProductService } from '../../services/product/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  product: Product = new Product();
  subscriptions: Subscription[] = [];
  
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.getProduct();
  }
 
  ngOnInit(): void {
  }

  getProduct() {
    let productId = this.route.snapshot.paramMap.get('id');

    const subscription: Subscription =  this.productService.getProductById(Number(productId)).subscribe(
      (res: Product) => {
        this.product = res;
        console.log(this.product)
      }
    );
    this.subscriptions.push(subscription);
  }

  goBack() {
    this.router.navigate(['../products-list']);
  }

  changeImage(image) {
    let mainImage = <HTMLImageElement>document.getElementById('main-image');
    mainImage.src = image;
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }
}
