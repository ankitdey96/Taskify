import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field'
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule,MatIconModule,MatInputModule,ReactiveFormsModule,RouterLink,HttpClientModule ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  public PassWordIconHide:boolean = true;
  public form!:FormGroup;
  private authService = inject(AuthService);
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email:['',Validators.required,Validators.email],
      password:['',Validators.required]
    });

  }

  Login(){
    console.log(this.form,"form");
    this.authService.LogIn(this.form.value).subscribe((response)=>{
      console.log(response);
    });
  }

}
