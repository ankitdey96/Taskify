import { Component, ElementRef, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.css'
})
export class ListItemComponent {
  @Input() HeaderName:string = '';
  IsEditing:boolean = false;
  constructor(private elementRef: ElementRef) {}

  OnSubmit(NewName:string){
    this.HeaderName = NewName.trim() || this.HeaderName; // Update the name only if valid

  }

  ButtonEditing(){
    this.IsEditing = true;
  }

   @HostListener('document:click', ['$event'])
    onDocumentClick(event: MouseEvent) {
      debugger
      const clickedInside = this.elementRef.nativeElement.contains(event.target);
      if (!clickedInside) {
        this.IsEditing = false;
  
      }
    }
}
