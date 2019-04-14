import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators' 

@Injectable({
  providedIn: 'root'
})
export class HttpModuleService {

  httpOptions: any = {
    headers: new Headers({'Access-Control-Allow-Origin':'*'})
  };

  baseUrl: string = 'http://localhost:8000/api';
  //baseUrl: string = 'http://172.20.10.30:8000/api';

  constructor(private http: HttpClient) { }

  get(path: string): Observable<any> {
    return this.http.get(this.baseUrl + path).pipe(
      catchError(err => {
        return of (err.error);
      })
    );
  }

  delete(path: string, id: any): Observable<any> {
    return this.http.delete(this.baseUrl + path + id ).pipe(
      catchError(err => {
        return of (err.error);
      })
    );
  }
  put(path: string, data: any): Observable<any> {
    return this.http.put(this.baseUrl + path + data.id +'/',data).pipe(
      catchError(err => {
        return of (err.error);
      })
    );
  }

  post(path: string, data: any): Observable<any> {
    return this.http.post(this.baseUrl + path , data).pipe(
      catchError(err => {
        return of (err.error);
      })
    );
  }

}
