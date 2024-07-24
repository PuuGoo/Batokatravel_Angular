import { Injectable } from '@angular/core';
import { Catelogy, Product } from './db';
@Injectable({
  providedIn: 'root',
})
export class CatelogyService {
  url = 'http://localhost:3000/catelogies';
  async getAllCatelogies(): Promise<Catelogy[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? {};
  }
}

export class ProductService {
  url = 'http://localhost:3000/products';

  async getAllProducts(): Promise<Product[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? {};
  }

  async getProductById(id: number): Promise<Product | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }
}
