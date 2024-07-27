import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector:'[changeBg]',
    standalone:true
})

export class ChangeBackgroundDirective implements OnInit{
    //change the bc of an element
    constructor(private elementRef:ElementRef, private renderer:Renderer2){}
    ngOnInit(): void {
        
        // this.renderer.setStyle(this.elementRef,'color', 'red')
    }
//
}