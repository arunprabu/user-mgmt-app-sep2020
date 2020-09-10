import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './components/users.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

// feature level main switching box
@NgModule({
  declarations: [
    UsersComponent,
    AddUserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsersRoutingModule,
    HttpClientModule
  ]
})
export class UsersModule { }
