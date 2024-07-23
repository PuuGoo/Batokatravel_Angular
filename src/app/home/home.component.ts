import { Component, Input, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Catelogy } from '../db';
import { CatelogyService } from '../db.service';
import { CatelogyCardComponent } from '../catelogy-card/catelogy-card.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, CatelogyCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  catelogies: Catelogy[] = [];
  dbService: CatelogyService = inject(CatelogyService);

  constructor() {
    this.dbService.getAllCatelogies().then((catelogies: Catelogy[]) => {
      this.catelogies = catelogies.filter(
        (value, index) => value.id <= 6 && value.isFeatured == true
      );
    });
  }
}
