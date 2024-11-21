import { Component } from '@angular/core';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { BoardListComponent } from "../board-list/board-list.component";

@Component({
  selector: 'app-work-spaces',
  standalone: true,
  imports: [CdkAccordionModule, MatIconModule, MatExpansionModule, SidebarComponent, BoardListComponent],
  templateUrl: './work-spaces.component.html',
  styleUrl: './work-spaces.component.css'
})
export class WorkSpacesComponent {
 
}
