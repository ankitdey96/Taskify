import { Component, Input } from '@angular/core';
import { BoardListComponent } from "../board-list/board-list.component";
import { ListformComponent } from "../listform/listform.component";
import { ListItemComponent } from '../list-item/list-item.component';

@Component({
  selector: 'app-list-container',
  standalone: true,
  imports: [ListformComponent,ListItemComponent],
  templateUrl: './list-container.component.html',
  styleUrl: './list-container.component.css'
})
export class ListContainerComponent {
  @Input() List:string[] = [];

}
