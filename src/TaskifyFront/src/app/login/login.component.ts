import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule,MatIconModule,MatInputModule,ReactiveFormsModule,RouterLink,MatSnackBarModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  public PassWordIconHide:boolean = true;
  public form!:FormGroup;

  constructor(private fb: FormBuilder,private notificationservice:NotificationService,private route:Router,private authService:AuthService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email:['',Validators.required,Validators.email],
      password:['',Validators.required]
    });

  }

  Login(){
    this.authService.LogIn(this.form.value).subscribe({
      next: (response) => {
        const message = response.isSuccess ? 'Login Successfully' : response.error;
        this.notificationservice.showMessage(message);
        if (response.isSuccess) {
          this.route.navigateByUrl('/workspaces');
        }
      },
      error: (err) => {
        this.notificationservice.showMessage('An error occurred. Please try again.');
        console.error('Login error:', err);
      }
    });
    
  }

  

 

}
