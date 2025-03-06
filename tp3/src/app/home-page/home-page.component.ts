import { Component } from '@angular/core';
import { DESTINATIONS, DESCRIPTIONS, PRIX } from '../data'
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  destinations = DESTINATIONS;

  descriptions = DESCRIPTIONS;

  prix = PRIX;


  currentPage = 1;

  itemsPerPage = 20;


  get paginatedVoyages() {

    const startIndex = (this.currentPage - 1) * this.itemsPerPage;

    const endIndex = startIndex + this.itemsPerPage;

    return this.destinations.slice(startIndex, endIndex).map((destination, index) => ({

      destination,

      description: this.descriptions[startIndex + index],

      prix: this.prix[startIndex + index]

    }));

  }


  totalPages() {

    return Math.ceil(this.destinations.length / this.itemsPerPage);

  }


  changePage(page: number) {

    if (page >= 1 && page <= this.totalPages()) {

      this.currentPage = page;

    }

  }
}
