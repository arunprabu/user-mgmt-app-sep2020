import { Directive, ElementRef, Renderer2 } from '@angular/core';

// Decorator
@Directive({
  selector: '[appColorizer]' // attribute selector
})
export class ColorizerDirective {

  // using ElementRef we can find the which element is using this directive
  constructor( private elRef: ElementRef, private renderer: Renderer2 ) { // dependency injection
    console.log('Inside Constructor of ColorizerDirective');
    console.log(this.elRef.nativeElement);
    const el = this.elRef.nativeElement;
    // javascript based approach
    // el.style.backgroundColor = 'yellow';

    // angular based approach
    this.renderer.setStyle(el, 'background-color', 'red');
    this.renderer.setStyle(el, 'color', 'white');
    // todo: create element and add it inside appColorizer div
    // todo: handle events -- @HostListener()
  }

}
