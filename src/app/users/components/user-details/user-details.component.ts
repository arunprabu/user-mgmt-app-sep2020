import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [
  ]
})
export class UserDetailsComponent implements OnInit {

  contactData: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    // ajax calls
    this.userService.getUserByUserId(1)
      .subscribe( (res: any) => {
        console.log(res);
        this.contactData = res;
      });
  }

}
