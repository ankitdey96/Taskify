import { Component, ElementRef, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-listform',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './listform.component.html',
  styleUrl: './listform.component.css'
})
export class ListformComponent {
  IsEditing:boolean = false;
  ListName:string|null = '';
  
  constructor(private elRef: ElementRef){

  }
  ButtonEditing(){
    this.IsEditing = true;
  }
  OnBlur(NewName:string){
    this.OnSubmit(NewName);
    this.IsEditing = false;
  }

  OnSubmit(NewName:string){
    this.ListName = NewName.trim() || this.ListName; // Update the name only if valid

  }

  CancelEditing(){
    this.IsEditing = false;
  }

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: MouseEvent) {
    const clickedInside = this.elRef.nativeElement.contains(event.target);
    if (!clickedInside && this.IsEditing) {
      this.IsEditing = false;
    }
  }
}
