import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot,UrlTree } from '@angular/router';
import { SellerService } from 'src/servicies/seller.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate
{
  isSellerLogin: any;
  router: any;
  constructor(private sellerservice:SellerService){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(localStorage.getItem('seller'))
    {
      return true;
    }
    return this.sellerservice.isSellerLogin;
  }

}
