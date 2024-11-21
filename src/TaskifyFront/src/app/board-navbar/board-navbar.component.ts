import { Component, Input } from '@angular/core';
import { BoardTitleFormComponent } from "../board-title-form/board-title-form.component";

@Component({
  selector: 'app-board-navbar',
  standalone: true,
  imports: [BoardTitleFormComponent],
  templateUrl: './board-navbar.component.html',
  styleUrl: './board-navbar.component.css'
})
export class BoardNavbarComponent {
  @Input() BoardName:string|null = '';
}
