import { Component } from '@angular/core';
import { FrmUserService } from './services/frm-user.service';
import { FrmInfoAut } from './class/frm-info-aut';
import { FrmReponseToken } from './class/frm-reponse-token';
import { FrmCurrentUserService } from './services/frm-current-user.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { FrmModalLoggingComponent } from './frm-mocal-logging/frm-mocal-logging.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontformation';
  bsModalRef: BsModalRef;


  constructor(private srvAuth: FrmUserService ,
              public currentUser : FrmCurrentUserService,
              private modalService: BsModalService){}


  
  public get btName() : string {
    if (this.currentUser.isLogged){
      return "LOG OFF";
    }else{
      return "LOG ON";
    }

  }
    
  
  public get stateClass() : any {
    return {
      logoff: this.currentUser.isLogged,
      logon : !this.currentUser.isLogged
    }
  }
  

  onClickLog(){
    if (this.currentUser.isLogged){
      this.currentUser.reset();
    }else{
      this.onClickTest();
    }
  }


  onClickOpen(){
    this.bsModalRef = this.modalService.show(FrmModalLoggingComponent, {initialState : { message: "test 222222" }});
  }

  onClickClose(){
    this.currentUser.reset();
  }

  onClickTest(){
    
    const instance : FrmInfoAut = new FrmInfoAut();
    instance.byEmail = false;
    instance.identifiant = "user";
    instance.passw = "????????";

    // appel du back
    this.srvAuth.authentification(instance).subscribe((rep: FrmReponseToken)=>{
      // OK
      console.log(rep);
    } , 
    (err)=>{
      // KO
      console.log(err);
    });

  }



}
