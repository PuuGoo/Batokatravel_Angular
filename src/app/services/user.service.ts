import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../db';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  url = 'http://localhost:3000/users';

  async getAllUsers(): Promise<User[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? {};
  }

  submitApplication(email: string, pass: string) {
    console.log(`Form Sign In received date : ${email} - ${pass}`);
  }

  constructor(private http: HttpClient) {}
}
