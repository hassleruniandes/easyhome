import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-inmueble-grid',
  templateUrl: './inmueble-grid.component.html',
  styleUrls: ['./inmueble-grid.component.scss'],
})
export class InmuebleGridComponent implements OnInit {
  constructor(private sanitizer: DomSanitizer) {}

  publications: any[] = [
    {
      id: 1,
      title: 'Hermosa Casa',
      description: 'Encantadora casa con jardín y piscina.',
      image: '/assets/inmueblegrid.PNG',
      iframeUrl: 'https://bolivar.perspectiva360.com/zipaquira-hacienda-san-jose/apartamento-68m2/hacienda-san-jose-68m2.html'
    },
    {
      id: 2,
      title: 'Apartamento Moderno',
      description: 'Apartamento en el centro de la ciudad.',
      image: '/assets/inmueblegrid.PNG',
      iframeUrl: 'https://bolivar.perspectiva360.com/zipaquira-hacienda-san-jose/apartamento-68m2/hacienda-san-jose-68m2.html'
    },
    {
      id: 3,
      title: 'Villa de Lujo',
      description: 'Espectacular villa con vista al mar.',
      image: '/assets/inmueblegrid.PNG',
      iframeUrl: 'https://bolivar.perspectiva360.com/zipaquira-hacienda-san-jose/apartamento-68m2/hacienda-san-jose-68m2.html'
    },
    {
      id: 1,
      title: 'Hermosa Casa',
      description: 'Encantadora casa con jardín y piscina.',
      image: '/assets/inmueblegrid.PNG',
      iframeUrl: 'https://bolivar.perspectiva360.com/zipaquira-hacienda-san-jose/apartamento-68m2/hacienda-san-jose-68m2.html'
    },
    {
      id: 2,
      title: 'Apartamento Moderno',
      description: 'Apartamento en el centro de la ciudad.',
      image: '/assets/inmueblegrid.PNG',
      iframeUrl: 'https://bolivar.perspectiva360.com/zipaquira-hacienda-san-jose/apartamento-68m2/hacienda-san-jose-68m2.html'
    },
    {
      id: 3,
      title: 'Villa de Lujo',
      description: 'Espectacular villa con vista al mar.',
      image: '/assets/inmueblegrid.PNG',
      iframeUrl: 'https://bolivar.perspectiva360.com/zipaquira-hacienda-san-jose/apartamento-68m2/hacienda-san-jose-68m2.html'
    },
  ];


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

  ngOnInit(): void {}
}
