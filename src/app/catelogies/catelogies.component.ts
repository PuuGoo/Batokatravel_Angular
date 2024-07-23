import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
@Component({
  selector: 'app-catelogies',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './catelogies.component.html',
  styleUrl: './catelogies.component.css',
})
export class CatelogiesComponent {}
