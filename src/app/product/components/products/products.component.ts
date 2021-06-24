import { Component, OnInit } from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { ProductsService } from '../../../core/services/products/products.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.fetchProducts();
    //this.createProduct()
    //this.updateProduct();
    //this.deleteProduct();
  }

  products: Product[] = [];

  clickProduct(id: string) {
    console.log("clickProduct " + id);
  }

  fetchProducts() {
    this.productsService.getAllProducts().subscribe(prod => {
      this.products = prod
    })
  }

  createProduct() {
    const newProduct: Product = {
      description: 'BO BO BO',
      id: '111111',
      price: 200,
      title: '111111111111111',
      image: "assets/images/camiseta.png",
    };
    this.productsService.createProduct(newProduct).subscribe(res=>{
      console.log(res)
    });
  }

  updateProduct(){
    const newProduct: Partial<Product> = {
      description: 'MODIFICADO',
      id: '111111',
      price: 200,
      title: '111111111111111',
    };
    this.productsService.updateProduct('666',newProduct).subscribe(res=>{
      console.log(res)
    });
  }
  deleteProduct(){
    this.productsService.deleteProduct('666').subscribe(res=>{
      console.log(res)
    });
  }
}
