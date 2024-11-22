import { Component, ElementRef, EventEmitter, HostListener, Input, input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-board-title-form',
  standalone: true,
  imports: [],
  templateUrl: './board-title-form.component.html',
  styleUrl: './board-title-form.component.css'
})
export class BoardTitleFormComponent implements OnChanges {
  @Input() BoardName:string|null = '';
  @Output() NewBoardName = new EventEmitter<string>();

  IsEditing:boolean = false;


  constructor(private elementRef: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    
  }
  ButtonEditing(){
    this.IsEditing = true;
  }
  OnBlur(NewName:string){
    this.OnSubmit(NewName);
    this.IsEditing = false;
  }

  OnSubmit(NewName:string){
    this.BoardName = NewName.trim() || this.BoardName; // Update the name only if valid

  }


  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    debugger
    const clickedInside = this.elementRef.nativeElement.contains(event.target);
    if (!clickedInside) {
      this.NewBoardName.emit(this.BoardName == null?'' :this.BoardName);
      this.IsEditing = false;

    }
  }

}
