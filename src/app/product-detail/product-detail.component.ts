import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/servicies/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  count=1
  data:undefined | product;
  data1:undefined | product[];
  constructor(private route:ActivatedRoute,private product:ProductService){
    var value=this.route.snapshot.paramMap.get('id');
    value && this.product.productdetail(value).subscribe((result:product)=>{
     this.data=result;
  }
    )}
  ngOnInit(): any {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    var value=this.route.snapshot.paramMap.get('id');
    return value && this.product.productdetail(value).subscribe((result:product)=>{
      console.log(result)
      let categories=result.category;
      this.data=result;
      this.product.productSearch(categories).subscribe((result1:product[])=>{
        this.data1=result1;
      })
     this.data=result;
  })
  }

 add(){
  this.count=this.count+1;
 }
 sub(){
  if(this.count>1)
  {
    this.count--;
  }
 }
}
