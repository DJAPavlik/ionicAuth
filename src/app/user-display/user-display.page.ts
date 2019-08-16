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
  pubuser:  User[];

  constructor(
    private usersService: UserService ,
    private route: ActivatedRoute
    ) { }
 

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getUser(id);
  }
  getUser(id): void {
    console.log('In GETUSER(id)')

    this.usersService.getUserById(id).subscribe(
      (response:any) => {

        console.log('---THIS  IS IT????')
        console.log(response)
        this.pubuser = response.user

        console.log(this.pubuser)
        console.log('  --- ')
      }
    );
  }   // end getArticle(id)



}
