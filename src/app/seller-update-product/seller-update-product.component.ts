import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { product } from '../data-type';
import { SellerService } from 'src/servicies/seller.service';
import { ProductService } from 'src/servicies/product.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent {
  data:product | any;
  id: number |any;
  constructor(private route:ActivatedRoute,private service:ProductService,private router:Router){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.id=this.route.snapshot.paramMap.get('id');
    this.id && this.service.getdata(this.id).subscribe((result:product)=>{
     // console.log(id)
    //  console.log(result);
      this.data=result;
      console.log(this.data)
    });

  }
  submit(data:product){
    this.service.updateProduct(data,this.id).subscribe(()=>{
      this.router.navigate(['seller-home'])
    })
  }
}
