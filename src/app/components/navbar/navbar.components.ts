import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from '../../pages/home/home.component';
import { AboutComponent } from '../../pages/about/about.component';
import { DocsComponent } from '../../pages/docs/docs.component';
import { OthersComponent } from '../../pages/others/others.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule, 
    HomeComponent,
    AboutComponent,
    DocsComponent,
    OthersComponent,
    RouterLink
  ],
  templateUrl: './navbar.components.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {

  
}