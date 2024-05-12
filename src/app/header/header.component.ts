import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() title = 'Tytuł serwisu';
  @Input() userName = 'Krystian';
  isLogged = false;

  logUser() {
    this.isLogged = true;
  }

  logoutUser() {
    this.isLogged = false;
  }
}
