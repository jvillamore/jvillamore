import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';
import { HttpClient } from '@angular/common/http'
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private client: HttpClient) { }

  products: Product[] = [];

  getAllProducts() {
    return this.client.get<Product[]>(`${environment.url_api}/products/`);
  }
  getProduct(id: string) {
    return this.client.get<Product>(`${environment.url_api}/products/${id}`);
  }
  createProduct(product: Product) {
    return this.client.post(`${environment.url_api}/products/`, product);
  }
  updateProduct(id: string, changes: Partial<Product>) {
    return this.client.put(`${environment.url_api}/products/${id}`, changes);
  }
  deleteProduct(id: string) {
    return this.client.delete<Product>(`${environment.url_api}/products/${id}`);
  }
  
}
