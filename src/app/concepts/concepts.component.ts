import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
  ]
})
export class ConceptsComponent implements OnInit {

  // string interpolation related
  appName = 'User Management App!';
  year = 2020;

  // property binding related
  companyName = 'Hexaware';

  // two way binding related
  course = 'Angular';

  constructor() { }

  ngOnInit(): void {
  }

  // event binding related
  btnClickHandler(evt){
    alert('clicked');
    console.log(evt);
  }
}
