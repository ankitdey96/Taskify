import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { PopoverComponent } from "../common/popover/popover.component";
import { CommonModule, NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-board-list',
  standalone: true,
  imports: [MatIconModule, PopoverComponent,CommonModule],
  templateUrl: './board-list.component.html',
  styleUrl: './board-list.component.css'
})
export class BoardListComponent {

  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  IsShowPopOver:boolean = false;

  constructor(private route:Router){
    
  }

  CreateBoard(){
    this.IsShowPopOver = !this.IsShowPopOver;
  }

  VisiblePopOver(event:boolean){
    this.IsShowPopOver = event;
  }

  NavigateToBoard(BoardName:string){
    this.route.navigateByUrl('/board/'+BoardName);

  }
}
