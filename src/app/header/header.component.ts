import { Component, inject, Input, Renderer2 } from '@angular/core';
import { Catelogy, Product } from '../db';
import { CommonModule, NgForOf } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../services/user.service';
import { ProductService } from '../services/product.service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @Input() catelogy!: Catelogy[];
  isLogin: string | null = '';
  userService: UserService = inject(UserService);
  productService: ProductService = inject(ProductService);
  products: Product[] = [];
  filterItems: Product[] = [];

  applyFormSearch: FormGroup = new FormGroup({
    keysearch: new FormControl(''),
  });

  onChange(): void {
    this.filterItems = this.products.filter((product) =>
      product.name
        .toLowerCase()
        .includes(this.applyFormSearch.value.keysearch.toLowerCase())
    );
    console.log(this.filterItems);
  }
  constructor(private router: Router, private render: Renderer2) {
    this.productService.getAllProducts().then((products) => {
      this.products = products;
    });

    // this.render.listen('window', 'click', (e:Event) => {
    //   console.log(e);
      
    // })
  }

  logout() {
    this.userService.logout();
    this.router.navigateByUrl('signin');
  }
}
