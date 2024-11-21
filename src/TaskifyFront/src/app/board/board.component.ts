import { Component, OnInit } from '@angular/core';
import { BoardNavbarComponent } from "../board-navbar/board-navbar.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [BoardNavbarComponent],
  templateUrl: './board.component.html',
  styleUrl: './board.component.css'
})
export class BoardComponent implements OnInit {

  item:string|null = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.item = params.get('id');
    });

  }
}
