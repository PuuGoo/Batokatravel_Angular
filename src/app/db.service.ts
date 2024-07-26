import { Injectable } from '@angular/core';
import { Catelogy, Product, User } from './db';
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

export class FormSignin {
  submitApplication(email: string, pass: string) {
    console.log(`Form Sign In received date : ${email} - ${pass}`);
  }
}

export class UserService {
  url = 'http://localhost:3000/users';

  async getAllUsers(): Promise<User[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? {};
  }

  

}
