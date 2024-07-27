import { Directive, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHover]',
  standalone: true
})
export class HoverDirective implements OnInit {
  @Input() hoverColor="transparent"
  @Input() default="transparent"
  @HostBinding('style.backgroundColor') backgroundColor='transparent'
  constructor() { }

  ngOnInit(): void {
    this.backgroundColor=this.default    
  }

  @HostListener('mouseover') mouseO(){
    this.backgroundColor=this.hoverColor
  }

  @HostListener('mouseleave') mouseL(){
    this.backgroundColor=this.default
  }

}
