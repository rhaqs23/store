import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ViewProductsComponent } from './components/products-list/products-list.component';

const routes: Routes = [
  {
    path:'products-list',
    component: ViewProductsComponent
  },
  {
    path:'product-details/:id',
    component: ProductDetailsComponent
  },
  {
    path:'add-edit-product/:id',
    component: AddEditProductComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
