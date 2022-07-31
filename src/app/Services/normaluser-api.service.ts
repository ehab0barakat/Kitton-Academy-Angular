import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class NormaluserApiService {
 data:any;
 private httpOptions={};
  constructor(private authService:AuthService,private httpclient: HttpClient ,
    private router:Router) {
      this.httpOptions={
        headers:new HttpHeaders({
          'Content-Type': 'application/json' ,
  
        })
      }


    
   }

   // edit profile
   ngOnInit(): void {
    // / get data of  login user
this.authService.Auth().subscribe(response=>{
  this.data=response;
  

  
})


  }


  editProfile( data:any, id:number ):Observable<any>{
    return this.httpclient.put<any>(`${environment.APIBaseURL}/api/normaluser/${id}`,
                                              JSON.stringify(data),
                                              this.httpOptions)
                                            }

  
  
    
  
  

  

}
