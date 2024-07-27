import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {

  @Input() people:{Name:string, Age:number}[]=[]
  @Output() onDelete:EventEmitter<{id:number}>= new EventEmitter()
  //people value can be set by the parent
  deletePerson(i:number){
    this.onDelete.emit({id:i})
  }
}
