import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators,
  AbstractControl,
  ValidatorFn,
} from '@angular/forms';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  applySignUpForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    pass: new FormControl('', [
      Validators.required,
      this.passwordStrengthValidator as ValidatorFn,
    ]),
    confirmpass: new FormControl('', [
      Validators.required,
      this.passwordConfirmValidator as ValidatorFn,
    ]),
  });

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

  passwordConfirmValidator(control: AbstractControl) {
    const confirmpassword: string = control.value;
    console.log(confirmpassword);

    // const valid = password == confirmpassword;
    // return valid ? null : { confirmpassword: true };
  }

  submitSignUpForm() {
    let email = this.applySignUpForm.value.email;
    console.log(email);
  }
}
