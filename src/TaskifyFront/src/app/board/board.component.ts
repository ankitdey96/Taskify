import { Component, OnInit } from '@angular/core';
import { BoardNavbarComponent } from "../board-navbar/board-navbar.component";
import { ActivatedRoute } from '@angular/router';
import { ListContainerComponent } from "../list-container/list-container.component";

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [BoardNavbarComponent, ListContainerComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent implements OnInit {

  item:string|null = '';
  BoardList:string[] = ['To Do','Doing','Done'];
  
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.item = params.get('id');
    });

  }
}
