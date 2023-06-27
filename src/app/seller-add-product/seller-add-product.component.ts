import { Component } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from 'src/servicies/product.service';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {
  addmessege:String='';
constructor(private product:ProductService){}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.

}
addProduct(data:product):any
{
  this.addmessege=this.product.addProduct(data);
}
}
