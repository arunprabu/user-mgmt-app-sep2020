import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styles: [
  ]
})
export class AddUserComponent implements OnInit {

  // Step 1:  have the form tag equivalent in TS
  userForm: FormGroup;

  isSaved: boolean;

  constructor( private userService: UserService ) { // 1. connect to the service by DI

  }

  ngOnInit(): void { // lifecycle hook
    this.userForm = new FormGroup({ // step 1 continues...
      // Step2: have the form field equivalent in TS
      name: new FormControl('arun', Validators.required),  // Step 5: work on validations
      email: new FormControl('a@b.com', [Validators.required, Validators.email]),
      phone: new FormControl('2343245423', Validators.required) // todo: try minlength validation
    });
    // Refer HTML for step 3
  }

  addUserSubmitHandler(){
    console.log(this.userForm.value);

    // 2. send the above data to service
    this.userService.createUser(this.userForm.value)
      .subscribe( (res: any) => {  // 3. get resp from the service
        console.log(res);
        if (res && res.id){
          this.isSaved = true;
        }
      });
  }
}
