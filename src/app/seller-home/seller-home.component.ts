import { product } from './../data-type';
import { ProductService } from '../../servicies/product.service';
import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent {
  sellerProduct:product[]|undefined;
constructor(private product:ProductService,private router:Router){}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.product.getProduct().subscribe((result:product[])=>{

    this.sellerProduct=result;
    //console.log(this.sellerProduct)
  });
}
delete(id:number)
{
  this.product.deleteProduct(id).subscribe((res:any)=>{
    if(res)
    {
      this.product.getProduct().subscribe((result:product[])=>{

        this.sellerProduct=result;
        //console.log(this.sellerProduct)
      });
    }
    else{
      console.log("Item not deleted")
    }
   //console.log(`http://localhost:3000/product/${id}`);
 });
}
}
