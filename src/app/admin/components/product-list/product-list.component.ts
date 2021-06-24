import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../core/services/products/products.service'
import { Product } from '../../../core/models/product.model'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  displayedColumns: string[] = ['id', 'title', 'description', 'price', 'actions'];
  columnsToDisplay: string[] = ['id', 'title', 'description', 'price', 'actions'];
  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getAllProducts().subscribe(prod => {
      this.products = prod;
    })
  }

  deleteProduct(id: string) {
    this.productsService.deleteProduct(id).subscribe(rta => {
      if (rta)
        this.fetchProducts();
    });
  }

}
