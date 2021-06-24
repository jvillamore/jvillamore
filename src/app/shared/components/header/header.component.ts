import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../core/services/cart/cart.service'
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {

  // COmo observable
  total$: Observable<number>;
  constructor(
    private cartService: CartService
  ) {
    this.total$ = this.cartService.cart$
      .pipe(
        map(prod => prod.length)
      )
  }

  //Forma antigua
  /*
total = 0;
  constructor(
    private cartService: CartService
  ) {
    this.cartService.cart$
      .pipe(
        map(prod => prod.length)
      )
      .subscribe(total => {
        this.total = total
      })
  }
  
  */

}
