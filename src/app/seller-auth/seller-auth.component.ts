import { Component } from '@angular/core';
import { SellerService } from 'src/servicies/seller.service';
import {Router} from '@angular/router'
import { signUp, signin } from '../data-type';
@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {
  login=false;
  authError="";
constructor(private seller:SellerService,private router:Router){

}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  return this.seller.reloadSeller();
}
signUp(data:signUp):void{
 this.seller.userSignUp(data);
//  .subscribe((result:any)=>{
//   if(result)
//   {
//     this.router.navigate(['seller-home']);
//   }
// });


}
signIn(data:signin):void{
  this.seller.userSignIn(data);
  this.seller.isLoginError.subscribe((error)=>{
    if(error)
    {
      this.authError="email and password is incorrect";
      this.router.navigate(['seller-home']);
    }

  })
 }
openlogin(){
  this.login=true;
}
opensign(){
  this.login=false;
}

}
