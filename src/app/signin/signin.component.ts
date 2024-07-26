import { Component, inject } from '@angular/core';
import { FormSignin, UserService } from '../db.service';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { CommonModule, JsonPipe } from '@angular/common';
import { User } from '../db';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, JsonPipe, RouterModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
  providers: [FormSignin, UserService],
})
export class SigninComponent {
  formSignInService: FormSignin = inject(FormSignin);
  userService: UserService = inject(UserService);
  isCheckLogin = "";

  submitSignInForm() {
    this.userService.getAllUsers().then((users) => {
      const foundUser = users.filter((user) => {
        return (
          user.username == this.applySignInForm.value.email &&
          user.password == this.applySignInForm.value.pass
        );
      });
      foundUser.length !== 0
        ? (this.isCheckLogin = "true")
        : (this.isCheckLogin = "false");
      if (this.isCheckLogin == "true") {
        this._router.navigateByUrl('');
      } else {
        this._router.navigateByUrl('signin');
      }
    });
  }

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

  // checkLogin(username: string, password: string) {
  //   const foundUser = this.userService.getAllUsers().then((users) => {
  //     users.filter((user) => {
  //       return user.username == username && user.password == password;
  //     });
  //   });
  //   return foundUser;
  // }

  constructor(private _router: Router) {}
}
