import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { usersignUp} from 'src/app/data-type';
import {Router} from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class UserService {

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
        localStorage.setItem("user",JSON.stringify(result.body));
        this.router.navigate(['/']);
      }
    });
  }
}
