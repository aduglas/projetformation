import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FrmCurrentUserService {

  private token: string = "";

  constructor() { }

  public set LogToken(v : string) {
    this.token = v;
  }
  

  public get isLogged() : boolean {
    
    if (this.token){
      return true;
    }
    
    return false;
  }


}
