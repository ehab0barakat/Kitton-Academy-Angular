import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { UserLikes } from '../Models/user-likes';

@Injectable({
  providedIn: 'root'
})
export class UserlikesApiService {
  likePost:UserLikes[]=[];
  private httpOptions={};
  constructor(private httpclient: HttpClient ,private router:Router) {
    this.httpOptions={
      headers:new HttpHeaders({
        'Content-Type': 'application/json' ,
        "Authorization": `Bearer ${localStorage.getItem('token')}`,


      })
    }
   }

  //  to get user like
  getuserId(id:any):Observable<UserLikes>{
    return  this.httpclient.get<UserLikes>(`${environment.APIBaseURL}/api/likes/${id}`
    ,this.httpOptions)
 
  }


  // // add like to the post
  addlike(likePost:UserLikes):Observable<UserLikes>{
    return this.httpclient.post<UserLikes>(`${environment.APIBaseURL}/api/likes`,
                                              JSON.stringify(likePost),
                                              this.httpOptions)
                                            }



// delete 
deletelike(id:number):Observable<UserLikes>{
  return this.httpclient.delete<UserLikes>(`${environment.APIBaseURL}/api/likes/${id}`,
                                            
                                                                     this.httpOptions)
}



  
// get count of likes 
getAllLikes(id:number):Observable<UserLikes[]>{
  return this.httpclient.get<UserLikes[]>(`${environment.APIBaseURL}/api/likes/countlikes/${id}`,
  this.httpOptions)

}


}

