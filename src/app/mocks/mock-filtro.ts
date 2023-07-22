// En un archivo llamado 'filter-options.ts'

import { PublicationsMock as publications } from "./mock-publications";

const publicationTypes: string[] = ['Todos', ...new Set(publications.map(item => item.type))];
const cities: string[] = ['Todas', ...new Set(publications.map(item => item.city))];
const locations: string[] = ['Todas', ...new Set(publications.map(item => item.location))];

// Obtenemos los precios mínimos y máximos de las publicaciones
const priceArr: number[] = [...new Set(publications.map(item => item.price))];

// Ordenamos los precios de menor a mayor
priceArr.sort((a, b) => a - b);

const minPrices: number[] = [0, ...priceArr];
const maxPrices: number[] = [99999999, ...priceArr];

export default {
  publicationTypes,
  cities,
  locations,
  minPrices,
  maxPrices,
};
