import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { signUp } from 'src/app/data-type';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  usersignUp(data:signUp){
    return this.http.post<signUp>('http://localhost:3000/user',data,{observe:'response'})
  }
}
