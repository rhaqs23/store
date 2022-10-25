import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product/product.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { OnDestroy } from '@angular/core';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.scss']
})
export class AddEditProductComponent implements OnInit, OnDestroy {
  productForm: FormGroup;
  productId;
  product: Product;
  subscriptions: Subscription[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private router: Router
  ) {
      this.productForm = this.formBuilder.group({
        title: ['', Validators.required],
        price: ['', Validators.required],
        description: ['', Validators.required],
        discountPercentage: ['', Validators.required],
        rating: ['', Validators.required],
        brand: ['', Validators.required],
        category: ['', Validators.required]
      });
      this.getProduct();
   }

  ngOnInit(): void {
    
  }

  getProduct() {
    this.productId = this.route.snapshot.paramMap.get('id');
    if(this.productId > 0) {
      console.log(this.productId);
      const subscription: Subscription = this.productService.getProductById(this.productId).subscribe(
        (res) => {
          this.product = res;
          console.log(this.product);
          this.productForm.patchValue(this.product);
        }
      );
      this.subscriptions.push(subscription);
    }
  }

  addNewProduct() {

    if(this.productForm.valid) {
      const subscription: Subscription = this.productService.addProduct(this.productForm.value).subscribe(
        (res) => {
          console.log(res)
          this.snackBar.open('Product Added Succefully!', 'close', {
            duration: 3000,
            panelClass: ['green-snackbar']
          });
        },
        (err) => {
          console.log(err);
        }
      );
      this.subscriptions.push(subscription);
    }
  }

  editProduct() { 
    if(this.productForm.valid) {
      const subscription: Subscription = this.productService.updateProduct(this.productId, this.productForm.value).subscribe(
        (res) => {
          console.log(res)
          this.snackBar.open('Product Added Succefully!', 'close', {
            duration: 3000,
            panelClass: ['green-snackbar']
          });
        },
        (err) => {
          console.log(err);
        }
      );
      this.subscriptions.push(subscription);
    }
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

