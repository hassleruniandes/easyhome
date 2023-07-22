import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PublicationsService } from '../services/publications.service';

@Component({
  selector: 'app-inmueble-grid',
  templateUrl: './inmueble-grid.component.html',
  styleUrls: ['./inmueble-grid.component.scss'],
})
export class InmuebleGridComponent implements OnInit {


  publications: any[] = [];

  constructor(private publicationsService: PublicationsService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.publicationsService.filteredPublications$.subscribe(filteredPublications => {
      this.publications = filteredPublications;
    });
  }

  modalOpen = false;
  currentIframeUrl: string = '';

  open360View(iframeUrl: string): void {
    this.currentIframeUrl = iframeUrl;
    this.modalOpen = true;
  }

  closeModal(): void {
    this.modalOpen = false;
  }

  getSafeUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.currentIframeUrl);
  }

}
