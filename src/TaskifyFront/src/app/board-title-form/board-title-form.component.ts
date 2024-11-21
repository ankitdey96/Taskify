import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-board-title-form',
  standalone: true,
  imports: [],
  templateUrl: './board-title-form.component.html',
  styleUrl: './board-title-form.component.css'
})
export class BoardTitleFormComponent {
  @Input() BoardName:string|null = '';
  IsEditing:boolean = false;


  ButtonEditing(){
    this.IsEditing = true;
  }

  OnSubmit(){
    alert(this.BoardName);
  }
}
