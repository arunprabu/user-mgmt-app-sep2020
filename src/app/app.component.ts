import { Component } from '@angular/core';

// Decorator -- is a function - it enriches the class and makes the dependency injectable
// @Component() is  unifies html, css, ts and exposes in a selector
@Component({
  selector: 'app-root', // exposed in a selector - mandatory -- element selector is recommended
  templateUrl: './app.component.html', // html -- only one template and it is mandatory
  styleUrls: ['./app.component.css'] // css -- can be multiple and optional
})
export class AppComponent {
  // ts
  title = 'user-mgmt-app-sep2020';
}
