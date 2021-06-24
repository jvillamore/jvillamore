
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../../core/services/products/products.service'
import { Router, ActivatedRoute, Params } from '@angular/router'
import { MyValidators } from '../../../utils/validators'

@Component({
  selector: 'app-product-form',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;
  id: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.productForm = this.formBuilder.group({
      title: [null, Validators.required],
      price: [null, [Validators.required, MyValidators.isPriceValid]],
      address: [null, Validators.required, Validators.minLength],
    });
  }
  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.productsService.getProduct(this.id).subscribe(prod => {
        this.productForm.patchValue(prod);
      })

    })
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      this.productsService.updateProduct(this.id,this.productForm.value).subscribe(prod => {
        this.router.navigate(['/admin/products']);
        alert('Thanks!');
      });
    }
  }
}
