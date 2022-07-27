import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Icategory } from '../Models/icategory';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private httpOptions = {};
  constructor(private httpclient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
   }

  getAllCategories(): Observable<Icategory[]> {
    return this.httpclient.get<Icategory[]>(
      `${environment.APIBaseURL}/api/ProductsCategory`
    );
  }
}
