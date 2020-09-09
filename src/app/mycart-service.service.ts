import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MycartServiceService {

  constructor(private _http: HttpClient) { }
  cartItemList(): Observable<any> {
   return this._http.get<any>("http://localhost:8081/Order/all");
  }
 
}
