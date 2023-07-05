import { UserService } from './../../servicies/user.service';
import { Component } from '@angular/core';
import { usersignUp} from '../data-type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {
  error:String='';
  islogin=true;
   constructor(private user:UserService,private router:Router){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if(localStorage.getItem('user'))
    {
      this.router.navigate(['/'])
    }
  }
signup(data:usersignUp){
  this.user.usersignUp(data)
}
signin(data:usersignUp){
  this.user.usersignIn(data)
  if(this.user.islogin==false)
  {
    this.error="enter a valid details";
  }
}
change()
{
  this.islogin=!this.islogin;
}
}
