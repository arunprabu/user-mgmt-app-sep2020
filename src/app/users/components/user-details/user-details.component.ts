import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [
  ]
})
export class UserDetailsComponent implements OnInit {

  contactData: any;
  duplicateContactData: any;
  isUpdated: boolean;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // ideal place for ajax calls
    // read url param in angular
    const userId = this.activatedRoute.snapshot.paramMap.get('userId');

    this.userService.getUserByUserId(userId)
      .subscribe((res: any) => {
        console.log(res);
        this.contactData = res;
      });
  }

  editModalOpenHandler() {
    this.duplicateContactData = JSON.parse(JSON.stringify(this.contactData));
    this.isUpdated = false;
  }

  updateUserHandler(formInfo) {
    // console.log(formInfo); // form state - for additional ts side validation
    console.log(this.duplicateContactData);
    this.userService.updateUser(this.duplicateContactData)
      .subscribe((res: any) => {
        console.log(res);
        if (res && res.id) {
          this.isUpdated = true;
          setTimeout(() => {
            $('#editUserModal').modal('hide');
            this.contactData = res;
          }, 3000);
        }
      });
  }
}
