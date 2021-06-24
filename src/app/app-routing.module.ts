import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:
      [
        {
          path: '',
          redirectTo: '/home',
          pathMatch: 'full',
        },
        {
          path: 'home',
          loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)
        },
        {
          path: 'products',
          loadChildren: () => import('./product/product.module').then(prod => prod.ProductModule)
        },
        {
          path: 'contact',
          canActivate: [AdminGuard],
          loadChildren: () => import('./contact/contact.module').then(cont => cont.ContactModule)
        },
        {
          path: 'order',
          loadChildren: () => import('./order/order.module').then(order => order.OrderModule)
        }
      ]
  },
  {
    path: 'demo',
    component: DemoComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(adm => adm.AdminModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      preloadingStrategy: PreloadAllModules
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
