import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit {

  usersList: any;

  constructor(private userService: UserService) {
    console.log('Inside constructor');
  }

  ngOnInit(): void { // lifecycle hook
    console.log('Inside ngOnInit');
    // ideal place for ajax calls
    this.userService.getUsers()
      .subscribe((res: any) => {
        console.log(res);
        this.usersList = res;
      });
  }

}
