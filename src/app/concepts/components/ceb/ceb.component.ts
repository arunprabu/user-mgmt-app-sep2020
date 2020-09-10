import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: [
  ]
})
export class CebComponent implements OnInit {


  // Step 1: Creating an obj for EventEmitter Class
  @Output() profileLoaded = new EventEmitter(); // Step 2: Making custom event with @Output()

  constructor() {
  }

  ngOnInit(): void { // lifecycle hook
  }

  sendDataHandler(){
    this.profileLoaded.emit('Arun'); // Step 3: emitting the event with data
    // refer concepts.comp.html for step 4
  }

}
