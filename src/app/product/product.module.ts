import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule} from './product-routing.module'
import {SharedModule} from '../shared/shared.module'
import {MaterialModule} from '../material/material.module'

import { ProductComponent } from './components/product/product.component'
import { ProductDetailComponent } from './components/product-detail/product-detail.component'
import { ProductsComponent } from './components/products/products.component'

@NgModule({
    declarations: [
        ProductComponent,
        ProductDetailComponent,
        ProductsComponent
    ],
    imports:[
        ProductsRoutingModule,
        CommonModule,
        SharedModule,
        MaterialModule
    ]
})
export class ProductModule {

}