import { Component, inject } from '@angular/core';
import { FormSignin } from '../db.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
  providers: [FormSignin],
})
export class SigninComponent {
  formSignInService: FormSignin = inject(FormSignin);

  applySignInForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(4)]),
    pass: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });

  submitSignInForm() {
    this.formSignInService.submitApplication(
      this.applySignInForm.value.email ?? '',
      this.applySignInForm.value.pass ?? ''
    );
  }
}
