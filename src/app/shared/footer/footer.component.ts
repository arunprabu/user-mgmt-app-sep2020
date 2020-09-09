import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer', // selector
  // inline template
  template: `
    <div class="text-center">
      <hr>
      <app-menu>
        <li class="nav-item">
          <a class="nav-link" href="#">Back to Top</a>
        </li>
      </app-menu>
      <p class='alertText'>Copyright &copy; 2020 | Arun </p>
    </div>
  `,
  // inline styles
  styles: [
    `
      .alertText{
        color: grey;
      }
    `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
