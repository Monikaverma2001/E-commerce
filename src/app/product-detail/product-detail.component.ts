
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
  Productdata:product|any;
  data1:undefined | product[];
  removecart=false;
  constructor(private route:ActivatedRoute,private product:ProductService){
    var value=this.route.snapshot.paramMap.get('id');
    value && this.product.productdetail(value).subscribe((result:product)=>{
     this.Productdata=result;
     let cartdata=localStorage.getItem('localCart');
     if(value && cartdata){
      let items=JSON.parse(cartdata);
      items=items.filter((item:product)=> value==item.id.toString());
        //console.log(item.id.toString())
        if(items.length)
        {
          this.removecart=true;
        }
        else{
          this.removecart=false;
        }
      }

      }

    )}
  ngOnInit(): any {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    var value=this.route.snapshot.paramMap.get('id');
    return value && this.product.productdetail(value).subscribe((result:product)=>{
      //console.log(result)
      let categories=result.category;
      this.Productdata=result;

      this.product.productSearch(categories).subscribe((result1:product[])=>{
        this.data1=result1;
        this.Productdata=result;
     let cartdata=localStorage.getItem('localCart');
     if(value && cartdata){
      let items=JSON.parse(cartdata);
      items=items.filter((item:product)=> value==item.id.toString());
        //console.log(item.id.toString())
        if(items.length)
        {
          this.removecart=true;
        }
        else{
          this.removecart=false;
        }
      }

      })

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
 addToCart(item:any){
  this.Productdata.quantity=this.count;
  //console.warn(this.Productdata)
  if(!localStorage.getItem('user'))
  {

    this.product.localStorageAddToCart(this.Productdata);
    this.removecart=true;
  }else{

  }
 }
 removeToCart(productId:number|any){
  this.product.removeItemFromCart(productId);
  this.removecart=false;
 }
}
