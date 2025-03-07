import { Injectable } from '@angular/core';

export interface Travel {
  id: string;
  destination: string;
  description: string;
  prix: number;
  representation: string;
}

@Injectable({
  providedIn: 'root'
})
export class TravelsService {

  private travels: Travel[] = [];

  constructor() {
    this.generateRandomTravels(100); // Générer 100 voyages pour la pagination
  }

  private generateRandomTravels(count: number) {
    for (let i = 0; i < count; i++) {
      const destination = DESTINATIONS[Math.floor(Math.random() * DESTINATIONS.length)];
      const description = DESCRIPTIONS[Math.floor(Math.random() * DESCRIPTIONS.length)];
      const prix = PRIX[Math.floor(Math.random() * PRIX.length)];

      this.travels.push({
        id: this.generateId(),
        destination,
        description,
        prix,
        representation: '/assets/default.jpg' // Default image path
      });
    }
  }

  getTravels(): Travel[] {
    return this.travels;
  }

  private generateId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
}

export const DESTINATIONS: string[] = [
  'Bali, Indonésie', 'Kyoto, Japon', 'Santorin, Grèce', 'Reykjavik, Islande', 'Marrakech, Maroc',
  'Venise, Italie', 'Rio de Janeiro, Brésil', 'Phuket, Thaïlande', 'New York, États-Unis', 'Le Cap, Afrique du Sud',
  'Sydney, Australie', 'Hanoï, Vietnam', 'Toronto, Canada', 'Bangkok, Thaïlande', 'Dubaï, Émirats Arabes Unis',
  'Londres, Royaume-Uni', 'Buenos Aires, Argentine', 'Copenhague, Danemark', 'Amsterdam, Pays-Bas', 'Lisbonne, Portugal',
];

export const DESCRIPTIONS: string[] = [
  'Découvrez une destination inoubliable où aventure et détente se mêlent harmonieusement.',
  "Laissez-vous séduire par les paysages à couper le souffle et l'hospitalité locale.",
  'Une expérience unique entre culture ancestrale et modernité vibrante.',
  'Plongez dans une ambiance magique et laissez-vous surprendre par chaque recoin de cette ville fascinante.',
  'Entre traditions et innovations, cette destination vous réserve bien des surprises.',
];

export const PRIX: number[] = [
  799, 899, 999, 1099, 1199, 1299, 1399, 1499, 1599, 1699, 1799, 1899, 1999, 2099, 2199, 2299, 2399, 2499, 2599, 2699,
];