import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appOurIf]',
  standalone: true
})
export class OurIfDirective {

  @Input() set appOurIf (value:boolean){
    if(value){
      ///we are supposed to attach the template to the container
      this.vcRef.createEmbeddedView(this.templateRef)
    }else{
      //remove the template
      this.vcRef.clear()
    }
  }
  constructor(private templateRef:TemplateRef<any>, private vcRef:ViewContainerRef) { }

}
