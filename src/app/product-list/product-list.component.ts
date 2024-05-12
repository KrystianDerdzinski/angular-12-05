import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  products: string[] = ['Jabłko', 'Gruszka', 'Banan'];
  animals: string[] = ['Pies', 'Kot'];
  vegetables = ['Cebula', 'Marchew', 'Groszek'];
  prices = [1, 2, 3, 4];
  fontColor = 'red';
}
