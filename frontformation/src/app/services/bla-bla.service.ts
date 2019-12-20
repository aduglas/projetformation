import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BlaBla } from '../class/bla-bla';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlaBlaService {

  private urlBase: string ="http://localhost:3000";

  constructor(private http: HttpClient) { }

  public createBlaBla(instance: BlaBla) : Observable<BlaBla>{
    return this.http.post<BlaBla>(
                `${this.urlBase}/bla-blas` , // url
                 JSON.stringify(instance),   // données du body à transmettre
                 { headers: new HttpHeaders().set("Content-Type","application/json")} // type de donnée du body
                 );
  }



}
