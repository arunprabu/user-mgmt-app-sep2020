import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [
  ]
})
export class UserDetailsComponent implements OnInit {

  contactData: any;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // ajax calls
    // read url param in angular
    const userId = this.activatedRoute.snapshot.paramMap.get('userId');

    this.userService.getUserByUserId(userId)
      .subscribe( (res: any) => {
        console.log(res);
        this.contactData = res;
      });
  }

}
