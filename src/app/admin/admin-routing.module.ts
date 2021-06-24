import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component'
import { NavComponent } from './components/nav/nav.component'
import { TablasComponent } from './components/tablas/tablas.component'
import { DashComponent } from './components/dash/dash.component'
import { ProductListComponent } from './components/product-list/product-list.component'
import { ProductEditComponent } from './components/product-edit/product-edit.component'
const routes: Routes = [
   {
    path: '',
    component: NavComponent,
    children:[
      {
        path: 'create',
        component: ProductFormComponent
      },
      {
        path: 'tablas',
        component: TablasComponent
      },
      {
        path: 'dash',
        component: DashComponent
      },
      {
        path: 'products',
        component: ProductListComponent,
      },
      {
        path: 'products/edit/:id',
        component: ProductEditComponent
      },   
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
