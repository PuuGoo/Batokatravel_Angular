import { Component, inject } from '@angular/core';
import { FormSignin } from '../db.service';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, JsonPipe],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
  providers: [FormSignin],
})
export class SigninComponent {
  formSignInService: FormSignin = inject(FormSignin);

  applySignInForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    pass: new FormControl('', [
      Validators.required,
      this.passwordStrengthValidator as ValidatorFn,
    ]),
  });

  // applySignInForm: FormGroup = new FormGroup({
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   pass: new FormControl('', [
  //     Validators.required,
  //     Validators.pattern(
  //       '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*W)(?!.* ).{6,12}$'
  //     ),
  //   ]),
  // });

  submitSignInForm() {
    this.formSignInService.submitApplication(
      this.applySignInForm.value.email ?? '',
      this.applySignInForm.value.pass ?? ''
    );
    console.log(this.applySignInForm.controls['pass'].valid);
  }

  passwordStrengthValidator(control: AbstractControl) {
    const password: string = control.value;

    if (!password) return;

    const hasNumber = /[0-9]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasSymbol = /[!@#$%^&*]/.test(password);

    const valid =
      hasNumber && hasUpper && hasLower && hasSymbol && password.length >= 12;
    return valid ? null : { passwordStrength: true };
  }
}
