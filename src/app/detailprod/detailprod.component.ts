import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Product } from '../db';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { OrderService } from '../services/order.service';
@Component({
  selector: 'app-detailprod',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './detailprod.component.html',
  styleUrl: './detailprod.component.css',
  providers: [],
})
export class DetailprodComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  productById: Product | undefined;
  productService: ProductService = inject(ProductService);
  orderService: OrderService = inject(OrderService);
  idProd: number = -1;

  orderApply: FormGroup = new FormGroup({
    quantity: new FormControl(''),
  });

  orderSubmit() {
    this.orderService
      .addOrder(
        Object.assign({}, this.productById),
        this.orderApply.value.quantity
      )
      .subscribe((res) => {
        console.log('Add order successfully!');
        console.log(res);
      });
  }
  constructor() {
    this.idProd = Number(this.route.snapshot.params['id']);
    this.productService.getProductById(this.idProd).then((result) => {
      this.productById = result;
      console.log(this.productById);
    });
  }
}
