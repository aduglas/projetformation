import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from "@angular/common/http";

// ngx-boostrap
import { ModalModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrmModalLoggingComponent } from './frm-mocal-logging/frm-mocal-logging.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    FrmModalLoggingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // bootstarp
    ModalModule.forRoot()
  ],
  providers: [],
  entryComponents: [FrmModalLoggingComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
