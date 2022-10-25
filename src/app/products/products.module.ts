import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ViewProductsComponent } from './components/products-list/products-list.component';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEye } from '@fortawesome/free-regular-svg-icons';

import { faArrowLeft, faList, faPlus, faPen } from '@fortawesome/free-solid-svg-icons';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    ViewProductsComponent,
    AddEditProductComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    NgbRatingModule,
    MatSnackBarModule
  ]
})
export class ProductsModule { 
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faEye,
      faArrowLeft,
      faList,
      faPlus,
      faPen
    );
  }
}
