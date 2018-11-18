import { Directive, ElementRef, OnInit, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {

  constructor (
    private element: ElementRef,
    private renderer: Renderer2
    ) { }


  @HostListener('mouseenter') mouseEnter(event: Event) {
    const {nativeElement} = this.element;
    this.renderer.setStyle(nativeElement, 'background-color', '#ccc');
  }

  @HostListener('mouseleave') mouseLeave(event: Event) {
    const {nativeElement} = this.element;
    this.renderer.setStyle(nativeElement, 'background-color', 'transparent');
  }
}
