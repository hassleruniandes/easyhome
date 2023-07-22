import { Component } from '@angular/core';
import { FilterOptions } from '../interfaces/filter';
import { PublicationsService } from '../services/publications.service';
import filtroData from '../mocks/mock-filtro'

const publicationTypes = filtroData.publicationTypes;
const cities = filtroData.cities;
const locations = filtroData.locations;
const minPrices = filtroData.minPrices;
const maxPrices = filtroData.maxPrices;

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent {
  selectedOptions: FilterOptions = {
    type: 'Todos',
    city: 'Todas',
    location: 'Todas',
    minPrice: 0,
    maxPrice: 99999999
  };

  publicationTypes = publicationTypes;
  cities = cities;
  locations = locations;
  minPrices = minPrices;
  maxPrices = maxPrices;

  constructor(private publicationsService: PublicationsService) { }

  applyFilter() {
    const filteredElements = document.querySelectorAll('.card') as NodeListOf<HTMLElement>;
    filteredElements.forEach((element) => {
      element.classList.add('hidden');
      setTimeout(() => {
        element.classList.remove('hidden');
      }, 300); // Tiempo de espera para quitar la clase 'hidden'
    });
    this.publicationsService.applyFilter(this.selectedOptions);
  }
}
