import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { IDrink } from './drink';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrinksService {

  private _url: string = '/assets/drink.json';
  navigate: any;

  constructor(private http: HttpClient) { }

  getDrink()
    : Observable<any> {
    return this.http.get<any>(this._url)
  }
  getDrinkDetail(idDrink: number)
    : Observable<any> {
    return this.http.get<any>(this._url);
  }

}

