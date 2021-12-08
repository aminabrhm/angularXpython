import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  API_URL = "http://127.0.0.1:8080/api/"
  constructor(
    private http : HttpClient
  ) { }

  get(endpoint:string): Observable<any> {
    return this.http.get<any>(this.API_URL +endpoint)
      .pipe(
        tap(data => console.log(this.API_URL +endpoint)),
        catchError(this.handleError('getData', []))
      );
  }
  put(endpoint: string, data: any): Observable<any> {
    return this.http.put<any>(this.API_URL +endpoint, data)
  }

  post(endpoint: string, data: any): Observable<any> {
    return this.http.post<any>(this.API_URL +endpoint, data)
  }
  delete(endpoint: string): Observable<any> {
    return this.http.delete<any>(this.API_URL +endpoint)
  }

  getWithParam(endpoint: string, param: any , name: any): Observable<any> {
    let params = new HttpParams().set(name,param); //Create new HttpParams
    return this.http.get<any>(this.API_URL +endpoint, {params:params})
      .pipe(
        tap(data => console.log(this.API_URL +endpoint)),
        catchError(this.handleError('getData', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.log(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }

}
