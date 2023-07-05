import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { usersignUp} from 'src/app/data-type';
import {Router} from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  invalideAuthUser=new EventEmitter<boolean>(false);
  islogin:boolean=false;
  constructor(private http:HttpClient,private router:Router) { }
  usersignUp(data:usersignUp){
    return this.http.post<usersignUp>('http://localhost:3000/user',data,{observe:'response'}).subscribe((result:any)=>
    {
      if(result)
      {
        console.log(result.body)
        localStorage.setItem("user",JSON.stringify(result.body));
        this.router.navigate(['/']);
      }
    });
  }
  usersignIn(data:usersignUp):any{
    return this.http.get(`http://localhost:3000/user?email=${data.email}&password=${data.password}`, { observe: "response" }).subscribe((result: any) =>
      {
      if(result && result.body && result.body.length)
      {
       // console.log(result.body)
        this.invalideAuthUser.emit(true);
        this.islogin=true;
        localStorage.setItem("user",JSON.stringify(result.body));
        this.router.navigate(['/']);
      }
      else{
        this.invalideAuthUser.emit(false);
      }
    });
  }
}
