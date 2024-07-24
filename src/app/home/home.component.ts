import { Component, Input, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Catelogy, Product } from '../db';
import { CatelogyService, ProductService } from '../db.service';
import { CatelogyCardComponent } from '../catelogy-card/catelogy-card.component';
import { CommonModule } from '@angular/common';
import { ProductCartComponent } from '../product-cart/product-cart.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    CatelogyCardComponent,
    ProductCartComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [CatelogyService, ProductService],
})
export class HomeComponent {
  catelogies: Catelogy[] = [];
  productsSale: Product[] = [];
  productsPopular: Product[] = [];
  catelogyService: CatelogyService = inject(CatelogyService);
  productService: ProductService = inject(ProductService);

  constructor() {
    this.catelogyService.getAllCatelogies().then((catelogies: Catelogy[]) => {
      this.catelogies = catelogies.filter(
        (value, index) => value.id <= 6 && value.isFeatured == true
      );
    });

    this.productService.getAllProducts().then((products: Product[]) => {
      this.productsSale = products.filter(
        (value, index) => value.isSale == true
      );
      this.productsPopular = products.filter(
        (value, index) => value.isSale == false
      );
    });
  }
}
