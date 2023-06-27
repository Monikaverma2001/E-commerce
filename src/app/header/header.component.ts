import { Component } from '@angular/core';
import { SellerService } from 'src/servicies/seller.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private seller:SellerService,private router:Router){}
menuType:String='default';
Name:String='';
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
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
}
