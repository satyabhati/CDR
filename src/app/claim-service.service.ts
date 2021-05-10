import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ClaimServiceService {
 _url = 'http://localhost:3001/event/submission/'
  constructor(private http: HttpClient) { }
  
  claimEdit(userData){
  return this.http.post<any>(this._url,userData)
  }
}
