import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone:true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  login() {

    console.log('Logging in with username:', this.username, 'and password:', this.password);
  }
}
