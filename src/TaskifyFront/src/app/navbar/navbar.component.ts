import { Component } from '@angular/core';
import { LogoComponent } from "../logo/logo.component";
import { Route, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LogoComponent,RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router:Router){

  }
  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
