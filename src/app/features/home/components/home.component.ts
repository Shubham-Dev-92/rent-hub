import { Component } from '@angular/core';
import { ListingService } from '../../../core/services/listing/listing.service';
import { Listing } from '../../../core/models/listing.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  listings: Listing[] = [];

  constructor(
    private listingsService: ListingService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getListings();
  }

  getListings(): void {
    this.listingsService.getListings().subscribe({
      next: (data) => {
        this.listings = data;
        console.log('Listings:', this.listings);
      },
      error: (error) => {
        console.error('Error loading listings:', error);
      },
    });
  }

  viewDetails(id: number) {
    this.router.navigate(['/listing-details', id]);
  }
}
