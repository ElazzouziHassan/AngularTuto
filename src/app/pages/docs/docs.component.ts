import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from '../../auth.guard';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: "./docs.component.html",
  styleUrls: ["./docs.component.css"],
  providers: [AuthGuard]
})
export class DocsComponent {
 
}