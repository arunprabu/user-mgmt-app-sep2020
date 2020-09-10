import { Directive } from '@angular/core';

// Decorator
@Directive({
  selector: '[appColorizer]' // attribute selector
})
export class ColorizerDirective {

  constructor() {
    console.log('Inside Constructor of ColorizerDirective');
  }

  
}
