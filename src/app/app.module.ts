import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormioModule, FormioAppConfig } from 'angular-formio';
import { AppConfig } from '../config';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ClaimsComponent } from './core/components/claims/claims.component';
import { HttpClientModule } from "@angular/common/http";
import { NavComponent } from './core/components/nav/nav.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClaimsComponent,
    NavComponent
 
  ],
  imports: [
    BrowserModule,
    FormioModule,
    HttpClientModule,
    RouterModule.forRoot([
     
      {
        path: 'claims',
        component: ClaimsComponent
      },
    
    ], {useHash: true})
  
  ],
  providers: [{provide: FormioAppConfig, useValue: AppConfig}],
  bootstrap: [AppComponent]
})
export class AppModule { }
