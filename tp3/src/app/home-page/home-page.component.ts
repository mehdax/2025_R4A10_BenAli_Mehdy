import { Component, OnInit} from '@angular/core';
import { TravelsService, Travel } from '../voyage.services'
import { VoyageItemComponent } from './voyage-item/voyage-item.component';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [VoyageItemComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit {
  travels: Travel[] = [];
  paginatedVoyages: Travel[] = [];
  currentPage = 1;
  itemsPerPage = 20;

  constructor(private travelsService: TravelsService) {}

  ngOnInit() {
    this.travels = this.travelsService.getTravels();
    this.updatePaginatedVoyages();
  }

  updatePaginatedVoyages() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedVoyages = this.travels.slice(startIndex, endIndex);
  }

  totalPages(): number {
    return Math.ceil(this.travels.length / this.itemsPerPage);
  }

  changePage(page: number) {
  
    if (page >= 1 && page <= this.totalPages()) {
      this.currentPage = page;
      this.updatePaginatedVoyages();
    }
  }
}