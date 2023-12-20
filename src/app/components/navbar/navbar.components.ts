import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule
  ],
  template: `
    <nav>
  <a routerLink="home"
     routerLinkActive="active-page"
     ariaCurrentWhenActive="page">
    Home
  </a>
  <a routerLink="about"
     routerLinkActive="active-page"
     ariaCurrentWhenActive="page">
    About
  </a>
  <a routerLink="shop"
     routerLinkActive="active-page"
     ariaCurrentWhenActive="page">
    Shop
  </a>
</nav>
  `,
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {

  
}