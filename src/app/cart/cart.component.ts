import { Component, inject } from '@angular/core';
import { Order, Product } from '../db';
import { OrderService } from '../services/order.service';
import { CommonModule, NgFor, NgForOf } from '@angular/common';
import { ProductService } from '../services/product.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  orders: Order[] = [];
  orderService: OrderService = inject(OrderService);
  productService: ProductService = inject(ProductService);
  prods: object[] = [];

  constructor() {
    this.orderService.getAllOrder().then((orders) => {
      this.orders = orders;
      console.log(this.orders[0].idProd.price);
    });
  }
}
