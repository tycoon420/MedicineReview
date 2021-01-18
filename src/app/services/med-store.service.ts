import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import 'rxjs/add/operator/map';

import { Med } from '../shared';

@Injectable()
export class MedStoreService {

  private headers: Headers = new Headers();
  private api: string = 'http://book-monkey2-api.angular2buch.de';
  meds: Med[];

  constructor(private http: HttpClient) {
    this.headers.append('Content-Type', 'application/json');
  }

  getSingle(isbn: string): Observable<Med> {
      return this.http
        .get(`${this.api}/med/${isbn}`)  
        .map(response => response.json())
        .map(rawMed => new Med(rawMed.title, rawMed.description, rawMed.number, rawMed.isbn))
  }

  getAll(): Observable<Med[]> {
      return this.http
        .get(`${this.api}/meds`)   
        .map(response => response.json())
        .map(rawMeds => rawMeds.map(rawMed => new Med(rawMed.title, rawMed.description, rawMed.number, rawMed.isbn)))
  }

  create(med: Med): Observable<any>  {
    return this.http
      .post(`${this.api}/med`, JSON.stringify(med), { headers: this.headers })
  }

  update(med: Med): Observable<any>  {
    return this.http
      .put(`${this.api}/med/${med.isbn}`, JSON.stringify(med), { headers: this.headers })
  }

  delete(isbn: string): Observable<any> {
    return this.http
      .delete(`${this.api}/med/${isbn}`);
  }
}