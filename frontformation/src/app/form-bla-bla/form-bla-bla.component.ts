import { Component, OnInit } from '@angular/core';
import { BlaBlaService } from '../services/bla-bla.service';
import { FormGroup, FormControl } from '@angular/forms';
import { BlaBla } from '../class/bla-bla';

@Component({
  selector: 'app-form-bla-bla',
  templateUrl: './form-bla-bla.component.html',
  styleUrls: ['./form-bla-bla.component.css']
})
export class FormBlaBlaComponent implements OnInit {


  formulaireBlabla: FormGroup = new FormGroup({
    label: new FormControl(''),
    qui: new FormControl('')
  });


  constructor(private blablaSrv: BlaBlaService) { }

  ngOnInit() {
  }

  // fonction associée à la soumission du formulaire
  onCreateBlaBla() {
    if (this.formulaireBlabla.valid){
      // creation de l'instance à émettre au serveur
      const blabla = new BlaBla();
      // mise en place des données dans l'instance
      blabla.label = this.formulaireBlabla.value.label;
      blabla.qui = this.formulaireBlabla.value.qui;
      blabla.quand = new Date().toISOString();
      // emission
      this.blablaSrv.createBlaBla(blabla).subscribe((bl : BlaBla)=>{
        // OK
        console.log(bl);
      },
      (err)=>{
        // KO
        console.error(err);
      })

    }

  }

}
