import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-poc-formulaire',
  templateUrl: './poc-formulaire.component.html',
  styleUrls: ['./poc-formulaire.component.css']
})
export class PocFormulaireComponent implements OnInit {

  // elements du formulaire associé
  leFormulaire: FormGroup = new FormGroup(
    {
      inpUn: new FormControl("" , [Validators.required , Validators.minLength(3)]),
      inpDeux: new FormControl("" , [Validators.required] )
    }
  );

  onGestionValidation() {
    
    console.log("onGestionValidation");
    console.log(this.leFormulaire.value);
    console.log(this.leFormulaire.errors);
  }

  constructor() { }

  ngOnInit() {
  }

}
