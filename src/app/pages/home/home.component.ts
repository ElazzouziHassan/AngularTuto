import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.components';
import { FooterComponent } from '../../components/footer/footer.component';
import { LoginComponent } from '../auth/login.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent, 
    FooterComponent, 
    LoginComponent
  ],
  templateUrl: './home.componet.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
 
}