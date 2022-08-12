import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})

export class MindGameService {
  private httpOptions={};
  constructor(private httpClient: HttpClient) {
    this.httpOptions={
      headers:new HttpHeaders({
        'Content-Type': 'application/json' ,
        "Authorization": `Bearer ${localStorage.getItem('token')}`,
    })
  }}


  CreateNewScore(newPrd:any):Observable<any>{
    return this.httpClient.post<any>(`${environment.APIBaseURL}/api/mind`,
                                              JSON.stringify(newPrd),
                                              this.httpOptions)
                                            }


AllScores():Observable<any>{
return this.httpClient.get<any>(`${environment.APIBaseURL}/api/mind`,this.httpOptions);

  }


}
