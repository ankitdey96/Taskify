import { Component, inject, OnInit } from '@angular/core';
import { LogoComponent } from "../logo/logo.component";
import { Route, Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LogoComponent,RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  authService = inject(AuthService);
  constructor(private router:Router){

  }
  ngOnInit(): void {
    this.IsLoggedIn();
  }
  navigateToLogin() {
    this.router.navigate(['/login']);
  }

  IsLoggedIn(){
    console.log(this.authService.IsLoggedIn(),"navbar");
    return this.authService.IsLoggedIn();
  }
}
