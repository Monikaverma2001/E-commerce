import { product } from './../data-type';
import { Component } from '@angular/core';
import { SellerService } from 'src/servicies/seller.service';
import {Route, Router} from '@angular/router'
import { ProductService } from 'src/servicies/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private seller:SellerService,private router:Router,private product:ProductService){}
menuType:String='default';
Name:String='';
data:undefined| product[];
username:String='';
cart:number |any;
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  let cartitem=localStorage.getItem('localCart');
  if(cartitem)
     this.cart = JSON.parse(cartitem).length;

  this.product.cartData.subscribe((item)=>{
    this.cart=item.length;
  })
  this.router.events.subscribe((val:any)=>{
    if(val.url){
      if(localStorage.getItem("seller") && val.url.includes("seller"))
      {
        let data=localStorage.getItem("seller");
        let d=data && JSON.parse(data)[0];
        //console.log("inside seller");
        this.Name=d.name;
        this.menuType="seller";
      }
      else if(localStorage.getItem("user") )
      {
        let data=localStorage.getItem("user");
        let d=data && JSON.parse(data)[0];
        console.log(d);
        //console.log("inside seller");
       this.username=d.username;
        this.menuType="user";
      }
      else{
        //console.log("outside seller");
        this.menuType="default";
      }
    }
  })

}
logout():void{
  localStorage.removeItem('seller');
  this.menuType='default';
  this.router.navigate(['seller-auth'])
}
logoutuser():void{
  localStorage.removeItem('user');
  this.menuType='default';
  this.router.navigate(['seller-auth'])

}
submit(query:any):any{
  if(query)
 {
  let d=query.target as HTMLInputElement;
 // console.log(d);
  this.product.searching(d.value).subscribe((result:product[])=>
  {
   // console.log(result);
   if(result.length>5)
      result.length=5;
    this.data=result;
  })

}
}
getSearch(data:String): any{
 // console.log(data.value)
  return this.router.navigate([`/search/${data}`])
  //this.product.productSearch(data.s);

}
hidesearch():void{
  this.data=undefined;
}
}
