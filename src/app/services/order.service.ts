import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../db';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  url = 'http://localhost:3000/order';
  addOrder(idProd: object, quantity: number) {
    return this.http.post(this.url, {
      idProd: idProd,
      quantity: quantity,
    });
  }

  async getAllOrder(): Promise<Order[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? {};
  }

  constructor(private http: HttpClient) {}
}
