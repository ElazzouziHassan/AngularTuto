import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from '../../auth.guard';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: ``,
  styleUrls: [],
  providers: [AuthGuard]
})
export class DocsComponent {
 
}