import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { AuthGuard } from './auth.guard';
import { SellerProductListComponent } from './seller-product-list/seller-product-list.component';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';
import { ProductSearchComponent } from './product-search/product-search.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'seller-auth',
    component:SellerAuthComponent
  },
  {
    path:'seller-home',
    component:SellerHomeComponent,
    canActivate:[AuthGuard]
  },
{
  path:'seller-product-list',
  component:SellerHomeComponent,
  canActivate:[AuthGuard]

},
{
  path:'seller-add-product',
  component:SellerAddProductComponent,
  canActivate:[AuthGuard]

}
,{
  path:'seller-update-product/:id',
  component:SellerUpdateProductComponent,
  canActivate:[AuthGuard]

}
,{
  component:ProductSearchComponent,
  path:'search/:query',

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
