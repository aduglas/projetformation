import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FrmCurrentUserService {

  private token: string = "";

  constructor() { }

  public set logToken(v : string) {
    this.token = v;
  }
  

  public get isLogged() : boolean {
    
    if (this.token){
      return true;
    }
    
    return false;
  }

  public reset(){
    this.token = "";
  }


}
