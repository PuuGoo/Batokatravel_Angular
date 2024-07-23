import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatelogiesComponent } from './catelogies/catelogies.component';
import { AddressShippingComponent } from './address-shipping/address-shipping.component';
import { BlogComponent } from './blog/blog.component';
import { BlogdetailComponent } from './blogdetail/blogdetail.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutmethodComponent } from './checkoutmethod/checkoutmethod.component';
import { ContactComponent } from './contact/contact.component';
import { DetailprodComponent } from './detailprod/detailprod.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
export const routes: Routes = [
  {
    path: 'addressShipping',
    component: AddressShippingComponent,
    title: 'Address Shipping page',
  },
  {
    path: 'blog',
    component: BlogComponent,
    title: 'Blog page',
  },
  {
    path: 'blogdetail',
    component: BlogdetailComponent,
    title: 'Blog detail page',
  },
  {
    path: 'cart',
    component: CartComponent,
    title: 'Cart page',
  },
  {
    path: 'catelogies',
    component: CatelogiesComponent,
    title: 'Catelogy page',
  },
  {
    path: 'checkoutmethod',
    component: CheckoutmethodComponent,
    title: 'Checkoutmethod page',
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact page',
  },
  {
    path: 'detailprod',
    component: DetailprodComponent,
    title: 'Detail prod page',
  },
  {
    path: 'forgotpassword',
    component: ForgotpasswordComponent,
    title: 'Forgot Password page',
  },
  {
    path: '',
    component: HomeComponent,
    title: 'Home page',
  },
  {
    path: 'signin',
    component: SigninComponent,
    title: 'Sign in page',
  },
  {
    path: 'signup',
    component: SignupComponent,
    title: 'Sign up page',
  },
  {
    path: '**',
    component: HomeComponent,
    title: 'Home page',
  },
];
