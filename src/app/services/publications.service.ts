// publications.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FilterOptions } from '../interfaces/filter';
import { Publication } from '../interfaces/publication';
import { PublicationsMock } from '../mocks/mock-publications';

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {

  private allPublications: Publication[] = PublicationsMock;
  private publications: Publication[] = PublicationsMock.slice(0, 6);

  private filteredPublicationsSubject = new BehaviorSubject<any[]>(this.publications);
  public filteredPublications$: Observable<any[]> = this.filteredPublicationsSubject.asObservable();

  constructor() { }

  applyFilter(filterOptions: FilterOptions) {
    const filteredPublications = this.allPublications.filter(publication => {
      const typeMatch = filterOptions.type === 'Todos' || publication.type === filterOptions.type;
      const cityMatch = filterOptions.city === 'Todas' || publication.city === filterOptions.city;
      const locationMatch = filterOptions.location === 'Todas' || publication.location === filterOptions.location;
      const priceMatch = publication.price >= filterOptions.minPrice && publication.price <= filterOptions.maxPrice;
      return typeMatch && cityMatch && locationMatch && priceMatch;
    }).slice(0, 6); // Limitamos a solo 6 publicaciones filtradas
    this.filteredPublicationsSubject.next(filteredPublications);
  }
}
