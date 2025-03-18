import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private router: Router, private authService: AuthService) {}

  onNavigate(path: string): void {
    this.router.navigate([`/${path}`]);
  }

  onLogout() {
    this.authService.logout();
  }
}
