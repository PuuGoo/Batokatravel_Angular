import { Injectable } from '@angular/core';
import { Db } from './db';
@Injectable({
  providedIn: 'root',
})
export class DbService {
  urlCatelogy = 'http://localhost:3000/catelogies';
  constructor() {}
}
