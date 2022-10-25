import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public productsEndpoint = 'https://dummyjson.com/products/';

  constructor(
    private http: HttpClient
    ) { }

  getAllData() {
    return this.http.get(this.productsEndpoint + '?limit=10');
  }

  getProductById(id: number) {
    return this.http.get(this.productsEndpoint + id);
  }

  searchProduct(query: string) {
    return this.http.get(this.productsEndpoint + 'search?q=' + query);
  }

  addProduct(product: Product) {
    return this.http.post(this.productsEndpoint + 'add', product);
  }

  updateProduct(id:number, product: Product) {
    return this.http.put(this.productsEndpoint + id, product )
  }

  deleteProduct(id: number) {
    return this.http.delete(this.productsEndpoint + id);
  }
}
