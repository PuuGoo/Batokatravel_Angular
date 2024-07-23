import { Component, Input } from '@angular/core';
import { Catelogy } from '../db';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() catelogy!: Catelogy[];
}
