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

  // ceb related
  dataReceivedFromChild;

  // structural directives related
  isLoggedIn = false;
  skillsList: string[] = ['html', 'css', 'js'];


  constructor() { }

  ngOnInit(): void {
  }

  // event binding related
  btnClickHandler(evt){
    alert('clicked');
    console.log(evt);
  }

  // custom event binding related
  profileLoadedHandler(evt){ // Step 5: receiving the data from child comp in evt
    console.log(evt);
    this.dataReceivedFromChild = evt;
  }
}
