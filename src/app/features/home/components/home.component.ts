import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  listings = [
    {
      title: 'Apartment 1',
      description: '2BHK with parking',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdd8XDoV-Si1xDf8IKqEtW5jKgZY-8nKDecw&s',
    },
    {
      title: 'Apartment 2',
      description: '3BHK with pool',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_QBS6sr0XbXHSUfY6CNWLYlF6Ftr8FsSH9w&s',
    },
  ];
}
