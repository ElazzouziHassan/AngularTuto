import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { Housinglocation } from '../housinglocation';
import { NavbarComponent } from '../components/navbar/navbar.components';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HousingLocationComponent,
    NavbarComponent
  ],
  templateUrl: './home.componet.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
 
}