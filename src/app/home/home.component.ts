import { Component } from '@angular/core';
import { Router} from '@angular/router';
import { ProductService } from 'src/servicies/product.service';
import { product } from '../data-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

data:undefined|product[];
  images :undefined|product[];
  constructor(private product:ProductService){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.product.popularProduct().subscribe((result:any)=>{
     // console.log(result);
      this.images=result;
    })
    this.product.getProducttrendy().subscribe((result:product[])=>{
      this.data=result;

    })
  }
}
