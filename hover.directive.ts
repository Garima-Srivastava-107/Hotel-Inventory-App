// import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[hinvHover]',
  standalone: true
})
export class HoverDirective implements OnInit{
@Input()color:string='yellow';
  constructor(private element:ElementRef
  ,private renderer:Renderer2) {
    console.log(this.renderer);
   }
ngOnInit(): void {
  // this.element.nativeElement.style.backgroundColor="red";
  this.renderer.setStyle(this.element.nativeElement,
    'backgroundColor',
    this.color
  );
}
@HostListener('mouseenter')onMouseEnter(){
  this.renderer.setStyle(
    this.element.nativeElement,
    'backgroundColor',
    'green'
  );
}
  @HostListener('mouseleave')onMouseLeave(){
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'white'
    );
  }

}
