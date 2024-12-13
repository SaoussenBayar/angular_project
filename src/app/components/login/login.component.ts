import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importez FormsModule ici


@Component({
  selector: 'app-login',
  imports: [BrowserModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
  
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  // Method to handle login form submission
  login(): void {
    this.authService.login(this.username, this.password).subscribe(
      response => {
        const token = response.token;
        this.authService.setAuthToken(token);  // Store token in localStorage
        this.router.navigate(['/admin']);  // Redirect to the admin page after login
      },
      error => {
        console.error('Error:', error);
        alert('Login failed. Please check your credentials.');
      }
    );
  }
}
