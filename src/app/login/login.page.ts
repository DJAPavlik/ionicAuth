import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; 


import { UserService } from '../user.service';
import { User } from '../../models/user';
import { AppRoutingModule } from '../app-routing.module';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage implements OnInit {
  locAppRoute = new AppRoutingModule();
  
  
  user:User = new User();
  
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

  onSubmit(): void{
   //  console.log('in asd login.page.ts - onSubmit()')
    this.userService.logIn(this.user).subscribe(
      
      (response) => {
        console.log(this.response);

        this.response(response);
      }
    );
  }  // end onSubmit() method

}  // end class LoginPage
