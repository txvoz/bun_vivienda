import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyNumbers]'
})
export class OnlyNumbersDirective {

  constructor(private el: ElementRef) { }

  @HostListener('input', ['$event'])
  onInput(event: KeyboardEvent) {
    const inputValue: string = this.el.nativeElement.value;
    this.el.nativeElement.value = inputValue.replace(/[^0-9]/g, '');
    if (inputValue !== this.el.nativeElement.value) {
      event.stopPropagation();
    }
  }

}
