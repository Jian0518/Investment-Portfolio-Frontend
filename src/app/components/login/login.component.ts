import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = {
    username: '',
    password: ''
  };
  error = '';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  onSubmit() {
    this.error = '';
    this.http.post('http://localhost:8080/api/auth/login', this.loginForm)
      .subscribe(
        (response: any) => {
          localStorage.setItem('token', response.token);
        },
        (error) => {
          this.error = 'Invalid username or password';
          console.error('Login error:', error);
        }
      );
  }
}