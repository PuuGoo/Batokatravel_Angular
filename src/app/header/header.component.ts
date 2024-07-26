import { Component, Input } from '@angular/core';
import { Catelogy } from '../db';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() catelogy!: Catelogy[];
  isLogin: string | null = '';
  constructor(private router: Router) {
    this.isLogin = localStorage.getItem('isLogin');
  }
}
