import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; 


import { UserService } from '../user.service';
// 1. Import the User object (model)
import { User } from '../../models/user';
import { AppRoutingModule } from '../app-routing.module';
import { Routes } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  locAppRoute = new AppRoutingModule();
  
  
  user:User = new User();
  confirmPw:string;
  errorMessage: any;

  // 4. Clear out the contructor login
  constructor(private userService: UserService ) { }


  ngOnInit() {  }

  response(response): void{
    if(response.success===false){
      this.errorMessage = 'Invalid Credentials';
    }

    if(response.success===true){
      window.location.href = '/';
    }
  }

  onSubmitRegistration(): void{
    alert('in onSubmitRegistration');
 /*   if (!this.user.username ||
        !this.user.first_name ||
        !this.user.last_name ||
        !this.user.username  ||
        !this.user.password  )
      {this.errorMessage = 'enter all data'}
*/
//var form = document.getElementById('registration.page.html');
  console.log(this.confirmPw);
//var college = form.element.searchfield.value;


    /* console.log(this.user.logIn(this.co))
      this.userService.logIn(this.user).subscribe(
        (response) => {
          this.response(response);
        }
    ); //  JUNKJUNK */
  


 

    
  
  }  // end onSubmitRegistration() method

}  // end class RegisterPage
