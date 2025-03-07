import { Component, Input } from '@angular/core';
import { Travel } from '../../voyage.services'; // Assurez-vous que le chemin est correct

@Component({
  selector: 'app-voyage-item',
  standalone: true,
  template: `
    <div class="voyage-item">
      <h3>{{ voyage.destination }}</h3>
      <p>{{ voyage.description }}</p>
      <p>Prix: {{ voyage.prix }} €</p>
    </div>
  `
})
export class VoyageItemComponent {
  @Input() voyage!: Travel;
}
