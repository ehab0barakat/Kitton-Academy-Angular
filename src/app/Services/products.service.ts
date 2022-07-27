import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private httpOptions = {};
  constructor(private httpclient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }

  getAllProducts(): Observable<IProduct[]> {
    return this.httpclient.get<IProduct[]>(
      `${environment.APIBaseURL}/api/Product`
    );
  }
  getProductByID(ProdID: number): Observable<IProduct> {
    return this.httpclient.get<IProduct>(
      `${environment.APIBaseURL}/api/Product/${ProdID}`
    );
  }
  getProductsByCatID(catID: number): Observable<IProduct[]> {
    return this.httpclient.get<IProduct[]>(
      `${environment.APIBaseURL}/api/ProductsCategory${catID}`
    );
  }

  addProduct(newProd: IProduct): Observable<IProduct> {
    return this.httpclient.post<IProduct>(
      `${environment.APIBaseURL}/api/Product`,
      JSON.stringify(newProd),
      this.httpOptions
    );
  }
  // searchProductByName(prodName:string):IProduct|undefined{
  //   return this.prdList.find(prod=>prod.name==prodName);
  // }

  editProd(newProd: IProduct, ProdID: number): Observable<IProduct> {
    return this.httpclient.put<IProduct>(
      `${environment.APIBaseURL}/api/Product/${ProdID}`,
      JSON.stringify(newProd),
      this.httpOptions
    );
  }

  deleteProd(ProdID: number): Observable<IProduct> {
    return this.httpclient.delete<IProduct>(
      `${environment.APIBaseURL}/api/Product/${ProdID}`,
      this.httpOptions
    );
  }
}
