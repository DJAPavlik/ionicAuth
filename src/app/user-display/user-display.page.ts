import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../../models/user';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.page.html',
  styleUrls: ['./user-display.page.scss'],
})
export class UserDisplayPage implements OnInit {
  public pubuser:  User;
  confirmPw:string;
  errorMessage: any;
  errorPw:string;
  constructor(
    private userService: UserService ,
    private route: ActivatedRoute
    ) { }
 

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getUser(id);
  }
  getUser(id): void {
    console.log('In GETUSER(id)')

    this.userService.getUserById(id).subscribe(
      (response:any) => {

     //   console.log('---THIS  IS IT????')
     //   console.log(response)
        this.pubuser = response.user

     //   console.log(this.pubuser)
     //   console.log('  --- ')
      }
    );
  }   // end getArticle(id)

  onSubmitUpdateUser(): void{
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
     this.userService.updateUser(this.pubuser).subscribe(
        
      (response) => {


        this.response(response)
      } )
           
    }  // end onSubmitRegistration() method

    onSubmitDeleteUser(id:string): void{
     console.log('   In onSubmit Delete user')
     console.log(this.pubuser)
     console.log(this.pubuser._id)

      this.errorPw = '';
      this.userService.deleteUser(this.pubuser._id).subscribe(
        (response:any)=>{
          if(response.success == true){
            window.location.href = '/#/view-users';
          }
        }
      );
    }
  


    response(response): void{
   //   console.log('in response(respone)')
   //   console.log(response)
  
      if(response.success===false){
        this.errorMessage = 'User Update Error';
      }
  
      if(response.success===true){
        window.location.href = '/#/view-users';
      }
    }  // end response(response)

}
