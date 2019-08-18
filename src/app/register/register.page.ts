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
  errorPw:string;

  // 4. Clear out the contructor login
  constructor(private userService: UserService ) { }


  ngOnInit() {  }

  response(response): void{
    // console.log('in response(respone)')
    // console.log(response)

    if(response.success===false){
      this.errorMessage = 'User Already in file';
    }

    if(response.success===true){
      window.location.href = '/';
    }
  }    // end response(response)

  onSubmitRegistration(): void{
    this.errorPw = '';

 /*   JUNKJUNK - Need to complete edit codes for new user
 
    alert('in onSubmitRegistration');

 if (!this.user.username ||
        !this.user.first_name ||
        !this.user.last_name ||
        !this.user.username  ||
        !this.user.password  ||
        !this.confirmPw        )
      {this.errorMessage = 'enter all data'}
      else { // all data entered check each for content

         
      if ( this.user.password !== this.confirmPw ) 
        {this.errorPw = 'Passwords do not match'}}*/


     //  console.log('in asd login.page.ts - onSubmit()')
     this.userService.registerUser(this.user).subscribe(
        
      (response) => {
        console.log(this.response);

        this.response(response);
      } )
           
    }  // end onSubmitRegistration() method
  

  
  


 

    
  
 

}  // end class RegisterPage
