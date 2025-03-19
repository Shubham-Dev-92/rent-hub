import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { Router } from '@angular/router';
import { ListingService } from '../../../core/services/listing/listing.service';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { Listing } from '../../../core/models/listing.model';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockListingService: jasmine.SpyObj<ListingService>;
  let mockRouter: jasmine.SpyObj<Router>;

  beforeEach(() => {
    const listingSpy = jasmine.createSpyObj('ListingService', ['getListings']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [
        { provide: ListingService, useValue: listingSpy },
        { provide: Router, useValue: routerSpy },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;

    mockListingService = TestBed.inject(
      ListingService
    ) as jasmine.SpyObj<ListingService>;
    mockRouter = TestBed.inject(Router) as jasmine.SpyObj<Router>;

    fixture.detectChanges();
  });

  fit('should create the component', () => {
    expect(component).toBeTruthy();
  });

  fit('should load listings successfully', () => {
    const mockListings = [
      { id: 1, title: 'Luxury Apartment', description: 'Spacious apartment' },
      { id: 2, title: 'Cozy Studio', description: 'Perfect for singles' },
    ] as Listing[];

    const listingsSubject = new BehaviorSubject<Listing[]>(mockListings);
    mockListingService.getListings.and.returnValue(of(mockListings));

    component.getListings();
    fixture.detectChanges();

    expect(component.listings).toEqual(mockListings);
    expect(mockListingService.getListings).toHaveBeenCalled();
  });

  fit('should handle error when loading listings', () => {
    const consoleSpy = spyOn(console, 'error');
    mockListingService.getListings.and.returnValue(
      throwError(() => new Error('Failed to load listings'))
    );

    component.getListings();
    fixture.detectChanges();

    expect(consoleSpy).toHaveBeenCalledWith(
      'Error loading listings:',
      jasmine.any(Error)
    );
  });

  fit('should navigate to listing details when `viewDetails()` is called', () => {
    const listingId = 5;

    component.viewDetails(listingId);

    expect(mockRouter.navigate).toHaveBeenCalledWith([
      '/listing-details',
      listingId,
    ]);
  });
});
