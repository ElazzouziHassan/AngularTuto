import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { NavbarComponent } from '../components/navbar/navbar.components';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent,
    NavbarComponent, 
    FooterComponent
  ],
  templateUrl: './home.componet.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
 
}