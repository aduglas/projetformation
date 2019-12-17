import { FrmInfoAut, FrmReponseToken } from "../class";
import { v4 } from "uuid";
import { HttpErrors, requestBody, post } from "@loopback/rest";
// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class FrmAuthentificationController {
  
  constructor() {}

  @post("/api/authentification")
  public authentification(@requestBody() infoLogin: FrmInfoAut) : FrmReponseToken{
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
 }


}
