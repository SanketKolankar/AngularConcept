import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  constructor(ref:ElementRef) {
    ref.nativeElement.style.color = "green"
   } 
}
