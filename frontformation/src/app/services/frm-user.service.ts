import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable , pipe  } from 'rxjs';
import { tap } from "rxjs/operators";

import { FrmReponseToken } from '../class/frm-reponse-token';
import { FrmInfoAut } from '../class/frm-info-aut';
import { FrmCurrentUserService } from './frm-current-user.service';

@Injectable({
  providedIn: 'root'
})
export class FrmUserService {

  // TODO reflechir au paramétrage de l'adresse du serveur
  private urlBase: string = "http://localhost:3000";

  // ctr avec injection de dépendances
  constructor(private http: HttpClient , private currentUser : FrmCurrentUserService ) { }

  public authentification(data: FrmInfoAut) : Observable<FrmReponseToken>{

    /*
    const httpHeader = new HttpHeaders();
    httpHeader.set("Content-Type" , "application/json");
    */

    return this.http.post<FrmReponseToken>(
                                           `${this.urlBase}/api/authentification` ,
                                           JSON.stringify(data),
                                           { headers : new HttpHeaders().set("Content-Type" , "application/json")} 
                                          ).pipe(
                                             tap(
                                              (data : FrmReponseToken) =>{
                                                // recuperation du token
                                                this.currentUser.logToken = data.token;
                                              } 
                                             )
                                          );

  }


}
