
import { Component } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from 'src/servicies/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent {

  data:undefined | product[];

  constructor(private route:ActivatedRoute,private product:ProductService){
    var value=this.route.snapshot.paramMap.get('query');
    value && this.product.productSearch(value).subscribe((result:product[])=>{
     this.data=result;
  }
    )}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
     var value=this.route.snapshot.paramMap.get('query');
    value && this.product.productSearch(value).subscribe((result:product[])=>{
     this.data=result;
    })
  }
}
