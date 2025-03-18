import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      users.push(this.registerForm.value);
      localStorage.setItem('users', JSON.stringify(users));

      alert('Registration successful!');
      this.router.navigate(['/login']);
    }
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
