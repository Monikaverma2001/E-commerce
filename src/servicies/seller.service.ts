import { signin } from './../app/data-type';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { signUp } from 'src/app/data-type';
import { BehaviorSubject, Observable } from 'rxjs'
import { UrlTree } from '@angular/router';
import { Router } from '@angular/router';
import {EventEmitter} from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class SellerService {
  sellerName:String='';
  isSellerLogin = new BehaviorSubject<boolean>(false);
  isLoginError=new EventEmitter<boolean>(false);

  constructor(private http: HttpClient, private router: Router) { }
  userSignUp(data: signUp): any {
    return this.http.post('http://localhost:3000/seller', data, { observe: "response" }).subscribe((result: any) => {
      if (result) {
        this.isSellerLogin.next(true);
        localStorage.setItem("seller", JSON.stringify(result.body));
        this.router.navigate(['seller-home']);

      }
    });

  }
  userSignIn(data: signin): any {
    return this.http.get(`http://localhost:3000/seller?email=${data.email}&password=${data.password}`, { observe: "response" }).subscribe((result: any) => {
      if (result && result.body && result.body.length) {
        console.log(result.body[0].name);
        //this.sellerName=result.body[0].name;
        this.isSellerLogin.next(true);
        localStorage.setItem("seller", JSON.stringify(result.body));
        this.router.navigate(['seller-home']);
        //console.log("user logged");
      }
      else{
        this.isLoginError.emit(true);
      }
      //http://localhost:3000/seller?email=monika@gmail.com&password=verma
      //http://localhost:3000/seller?email=monika@gmail.com&password=verma

    });
  }

  reloadSeller(): void {
    if (localStorage.getItem('seller')) {
      this.isSellerLogin.next(true);
      this.router.navigate(['seller-home']);
    }
  }
}
