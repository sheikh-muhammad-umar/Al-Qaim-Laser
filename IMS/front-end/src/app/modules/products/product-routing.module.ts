import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewProductsComponent } from './add-new-products/add-new-products.component';
import { ProductsDetailsComponent } from './products-details/products-details.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'list-products',
        component: ProductsComponent,
        data: {
          title: 'Products'
        }
      },
      {
        path: 'products-details/:id',
        component: ProductsDetailsComponent,
        data: {
          title: 'Products Details'
        }
      },
      {
        path: 'add-new-products',
        component: AddNewProductsComponent,
        data: {
          title: 'Add New Products'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
