import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-listing',
  standalone: false,
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  listingForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.listingForm = this.fb.group({
      buildingName: ['', Validators.required],
      location: ['', Validators.required],
      area: ['', [Validators.required, Validators.min(100)]],
      leaseType: ['long-term', Validators.required],
      rent: ['', [Validators.required, Validators.min(1)]],
      furnished: ['yes', Validators.required],
      gym: [false],
      pool: [false],
      parking: [false],
      backup: [false],
      elevator: [false],
      clubHouse: [false],
      security: [false],
      title: ['', Validators.required],
      description: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.listingForm.valid) {
      console.log(this.listingForm.value);
      const listings = JSON.parse(localStorage.getItem('listings') || '[]');

      // Add form data to the listings array
      listings.push({
        id: listings.length + 1,
        ...this.listingForm.value,
      });

      localStorage.setItem('listings', JSON.stringify(listings));
      alert('Listing posted successfully!');
      this.router.navigate(['/home']);
    }
  }
}
