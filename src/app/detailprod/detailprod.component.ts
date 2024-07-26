import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../db';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-detailprod',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detailprod.component.html',
  styleUrl: './detailprod.component.css',
  providers: [],
})
export class DetailprodComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  productById: Product | undefined;
  productService: ProductService = inject(ProductService);
  constructor() {
    const idProd = Number(this.route.snapshot.params['id']);
    this.productService.getProductById(idProd).then((result) => {
      this.productById = result;
      console.log(this.productById);
    });
  }
}
