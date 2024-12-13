import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    if (!this.authService.isAuthenticated()) {
      // Redirect to login page if not authenticated
      window.location.href = '/login';
    }
  }

  logout(): void {
    this.authService.logout();
    window.location.href = '/login';  // Redirect to login after logout
  }
}

