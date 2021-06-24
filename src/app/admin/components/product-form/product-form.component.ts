import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../../core/services/products/products.service'
import { Router } from '@angular/router'
import { MyValidators} from '../../../utils/validators'

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  productForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router
  ) {
    this.productForm = this.formBuilder.group({
      id: [null, Validators.required, Validators.minLength()],
      title: [null, Validators.required],
      price: [null, [Validators.required, MyValidators.isPriceValid]],
      address: [null, Validators.required],
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      this.productsService.createProduct(this.productForm.value).subscribe(prod => {
        this.router.navigate(['/admin/products']);
        alert('Thanks!');
      });
    }
  }
}
