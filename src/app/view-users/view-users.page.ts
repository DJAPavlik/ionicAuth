import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';
import { User } from '../../models/user';
import { AppRoutingModule } from '../app-routing.module';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.page.html',
  styleUrls: ['./view-users.page.scss'],
})
export class ViewUsersPage implements OnInit {
  locAppRoute = new AppRoutingModule();
  users: User[];
  
  errorMessage: any;
  constructor(private usersService: UserService ) { }


  ngOnInit() {
    this.getUsers();
  }
  getUsers(): void {
    console.log('Just before userService.getusersArray')
    this.usersService.getUsersArray().subscribe(
      (response:any) => {
        console.log('   In View Users ')
        console.log(response.users)
        this.users = response.users;
        console.log(this.users)
        console.log(this.users[0])
      }
    );
  }  // end getUsers
}
