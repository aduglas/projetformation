import { FrmInfoAut, FrmReponseToken } from "../class";
import { v4 } from "uuid";
import { HttpErrors, requestBody, post } from "@loopback/rest";
import { inject } from "@loopback/core";
import { FrmUserRepository } from "../repositories";
import { repository, Filter } from "@loopback/repository";
import { FrmUser } from "../models";
// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class FrmAuthentificationController {
  
  constructor(@repository(FrmUserRepository) private repo : FrmUserRepository ) {}

  /**
   * 
   * @param infoLogin 
   */
  private async findUser(infoLogin: FrmInfoAut) {

    // creation de la query
    const queryTemp  : Filter<FrmUser> = {};
    
    // test si query avec email ou pseudo
    if (infoLogin.byEmail){
      queryTemp.where = { 'email' : infoLogin.identifiant};
    }else{
      queryTemp.where = { 'pseudo' : infoLogin.identifiant};
    }

    // execution query

    //let rep: FrmUser | null = await this.repo.findOne( queryTemp); // execution asynchrone
    return await this.repo.findOne( queryTemp); // execution asynchrone

  }


  @post("/api/authentification")
  public async authentification(@requestBody() infoLogin: FrmInfoAut) : Promise<FrmReponseToken>{
   
    /*
    if (infoLogin.identifiant === "user" || infoLogin.identifiant === "admin"){
      // OK      
      const generate = v4(); // generation
      const rep = new FrmReponseToken(); // instance
      rep.token = generate;
      return rep;
    }
      // KO
      // reponse erreur
      throw new HttpErrors.Unauthorized("Utilisateur non authorisé");
    */

    // good code
    const userTemp: FrmUser| null = await this.findUser(infoLogin);

    if (!userTemp){
      throw new HttpErrors.Unauthorized("Utilisateur non authorisé");
    }

    const generate = v4(); // generation
    const rep = new FrmReponseToken(); // instance
    rep.token = generate;
    return rep;

 }


}
