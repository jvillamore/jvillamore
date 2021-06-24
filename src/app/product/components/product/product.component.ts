import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
  DoCheck,
  OnDestroy
} from '@angular/core';
import { Product } from '../../../core/models/product.model';
import { CartService } from '../../../core/services/cart/cart.service'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent /*implements OnInit,DoCheck, OnDestroy*/ {

  today: Date = new Date();
  constructor(
    private cartService: CartService
  ) {
    //console.log('1. constructor');
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('2. ngOnChanges');
  //   console.log(changes);
  // }
  /*
    ngOnInit() {
      console.log('3. ngOnInit');
    }
  
    ngDoCheck() {
      console.log('4. ngDoCheck');
    }
  
    ngOnDestroy() {
      console.log('5. ngOnDestroy');
    }
    */

  @Input() product!: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  addCart(id: string) {
    //console.log('Añadiendo al carro');
    //this.productClicked.emit(this.product.id);
    this.cartService.addCart(this.product)
  }


}