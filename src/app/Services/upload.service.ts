import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


@Injectable()
export class UploadService {
  constructor(private _http: HttpClient) {}

  uploadImage(vals:any): Observable<any> {
    let data = vals;

    return this._http.post(
      'https://api.cloudinary.com/v1_1/el-safwa/image/upload',
      data
    );
  }

  uploadVideo(vals:any): Observable<any> {
    let data = vals;

    return this._http.post(
      'https://api.cloudinary.com/v1_1/el-safwa/video/upload',
      data
    );
  }
}
