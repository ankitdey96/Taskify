import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-popover',
  standalone: true,
  imports: [],
  templateUrl: './popover.component.html',
  styleUrl: './popover.component.css'
})
export class PopoverComponent {
  @Input() isVisible = false; 
  @Output() PopoverVisible: EventEmitter<boolean> = new EventEmitter();


  ClosePopover(){
    this.PopoverVisible.emit(false);
  }

}
