import { Directive, ElementRef, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeBg]',
  standalone: true
})
export class ChangeBgDirective implements OnInit {
  @Input() color:string ='transparent'
  @HostBinding('style.backgroundColor') backgroundColor =''
  constructor() { }

  ngOnInit(): void {
      this.backgroundColor=this.color
  }

}
