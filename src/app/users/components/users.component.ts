import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../services/user.service';
import { Subscription } from 'rxjs';
import { User } from '../models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit, OnDestroy {

  usersList: any[];
  usersSubscription: Subscription;

  constructor(private userService: UserService) {
    console.log('Inside constructor');
  }

  ngOnInit(): void { // lifecycle hook
    console.log('Inside ngOnInit');
    // ideal place for ajax calls
    this.usersSubscription = this.userService.getUsers()
      .subscribe((res: any[]) => {
        console.log(res);
        this.usersList = res;
      });
  }

  ngOnDestroy(){
    // ideal place for you to clear the data, array, clear Interval, unsubscribe
    console.log('Inside destroy');
    this.usersSubscription.unsubscribe();
    if (this.usersList && this.usersList.length > 0 ){
      this.usersList.length = 0; 
    }
  }


}
