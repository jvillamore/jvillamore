import { Injectable } from '@angular/core';
import {BehaviorSubject } from  'rxjs'

import { Product } from '../../models/product.model'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products:Product[]=[];
  private cart = new BehaviorSubject<Product[]>([]);
  constructor() { }

  cart$ = this.cart.asObservable();

  addCart(product:Product){
    this.products=[...this.products,product]
    this.cart.next(this.products)
  }
}
