import { OverlayModule } from '@angular/cdk/overlay';
import { Component } from '@angular/core';

@Component({
  selector: 'app-boardoptions',
  standalone: true,
  imports: [OverlayModule],
  templateUrl: './boardoptions.component.html',
  styleUrl: './boardoptions.component.css'
})
export class BoardoptionsComponent {
  MenuOpen:boolean = false;

  ToggleMenu(){
    this.MenuOpen = true;
  }

  ClosePopover(){
    this.MenuOpen = false;
  }
}
