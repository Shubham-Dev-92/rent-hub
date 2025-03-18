import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = false;

  constructor(private router: Router) {}

  login(username: string, password: string) {
    if (username === 'user' && password === 'password') {
      this.isLoggedIn = true;
      localStorage.setItem('token', 'mock-token');
      this.router.navigate(['/home']);
    }
  }

  logout() {
    this.isLoggedIn = false;
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn || !!localStorage.getItem('token');
  }
}
