import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
} from '@angular/core';

@Directive({
  selector: '[scrollDown]',
})
export class scrollDownDirective {
  @Output() onBottom = new EventEmitter<any>();

  constructor(private container: ElementRef) {}

  @HostListener('scroll')
  scrollFn() {
    if (
      this.container.nativeElement.scrollTop > 0 &&
      this.container.nativeElement.scrollTop +
        this.container.nativeElement.clientHeight ===
        this.container.nativeElement.scrollHeight
    ) {
      this.onBottom.emit();
    }
  }
}
