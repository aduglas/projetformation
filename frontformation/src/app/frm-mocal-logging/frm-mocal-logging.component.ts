import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-frm-mocal-logging',
  templateUrl: './frm-mocal-logging.component.html',
  styleUrls: ['./frm-mocal-logging.component.css']
})
export class FrmModalLoggingComponent implements OnInit {

  message : string ="";

  data1:string ="toto";
  data2: string ="titi";


  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

}
