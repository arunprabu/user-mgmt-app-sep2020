import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './components/users.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';

// configuring child routes -- todo: lazy loading
const childRoutes: Routes = [
  {
    path: 'users', children: [
      { path: '', component: UsersComponent },
      { path: 'add', component: AddUserComponent },
      { path: '1', component: UserDetailsComponent }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(childRoutes) // registering child routes
  ],
  exports: [
    RouterModule
  ]
})
export class UsersRoutingModule { }
