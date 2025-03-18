import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../../../core/models/listing.model';
import { ListingService } from '../../../core/services/listing/listing.service';

@Component({
  selector: 'app-listing-details',
  standalone: false,
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.css'],
})
export class ListingDetailsComponent implements OnInit {
  listing: any;
  comments: string[] = [];
  newComment: string = '';

  constructor(
    private route: ActivatedRoute,
    private listingService: ListingService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.fetchListingDetails(id);
  }

  fetchListingDetails(id: number) {
    this.listingService.getListings().subscribe({
      next: (listings: Listing[]) => {
        this.listing = listings.find((l: any) => l.id === id);
        if (!this.listing) {
          alert('Listing not found!');
          this.router.navigate(['/']);
        }
      },
      error: (error: any) => {
        console.error('Error loading listing:', error);
      },
    });
  }

  addComment() {
    if (this.newComment.trim()) {
      this.comments.push(this.newComment.trim());
      this.newComment = '';
    }
  }

  navigateToListings() {
    this.router.navigate(['/home']);
  }
}
