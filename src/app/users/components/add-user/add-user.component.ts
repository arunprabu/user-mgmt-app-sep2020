import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styles: [
  ]
})
export class AddUserComponent implements OnInit {

  // Step 1:  have the form tag equivalent in TS
  userForm: FormGroup;

  constructor() { }

  ngOnInit(): void { // lifecycle hook
    this.userForm = new FormGroup({ // step 1 continues...
      // Step2: have the form field equivalent in TS
      name: new FormControl('', Validators.required),  // Step 5: work on validations
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', Validators.required) // todo: try minlength validation
    });
    // Refer HTML for step 3
  }

  addUserSubmitHandler(){
    console.log(this.userForm.value);
  }
}
