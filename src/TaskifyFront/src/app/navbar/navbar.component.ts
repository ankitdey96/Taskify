import { Component, inject, OnInit } from '@angular/core';
import { LogoComponent } from "../logo/logo.component";
import { Route, Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LogoComponent, RouterOutlet, SidebarComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  ShowSideBar:boolean = false;
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

   
  ButtonClick(){
    var sidebar:any = document.getElementById("ShowSideBartoggle");
    sidebar.classList.toggle("hidden");
    this.ShowSideBar = true;
  }

  autoHideSidebarOnResize() {
    var sidebar:any = document.getElementById("ShowSideBartoggle");
    
    // Check if screen width is above md (768px)
    if (window.matchMedia("(min-width: 768px)").matches) {
      // Automatically hide sidebar for large screens
      sidebar.classList.add("hidden");
    }
  }
  
  // Attach the resize listener
}
