import { UserService } from './../../servicies/user.service';
import { Component } from '@angular/core';
import { signUp } from '../data-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {
  constructor(private user:UserService,private router:Router){}
signup(data:signUp){
  this.user.usersignUp(data).subscribe((result:any)=>
  {
    if(result)
    {
      localStorage.setItem("user",JSON.stringify(result.body));
      this.router.navigate(['/']);
    }
  });
}
}
