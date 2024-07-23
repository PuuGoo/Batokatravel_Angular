import { Injectable } from '@angular/core';
import { Catelogy } from './db';
@Injectable({
  providedIn: 'root',
})
export class CatelogyService {
  urlCatelogy = 'http://localhost:3000/catelogies';
  async getAllCatelogies(): Promise<Catelogy[]> {
    const data = await fetch(this.urlCatelogy);
    return (await data.json()) ?? {};
  }
}

export class TourTravelService {
  urlTourTravelService = 'http://localhost:3000/tourtravel';
}
