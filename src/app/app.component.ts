import { Component, Input, OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { FormField } from './form-field';
import { FormfieldControlService } from './form-field-control.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [FormfieldControlService]
})
export class AppComponent implements OnInit {
  title = 'my-application';
  public data:any = []

  claimFields: Observable<FormField<any>[]>;
  accountFields: Observable<FormField<any>[]>;
  constructor(service: FormfieldControlService ,private http: HttpClient) {
    this.accountFields = service.accountFormFields();
    this.claimFields = service.claimFormFields()
       
  }


  ngOnInit(): void {
    
  }

 










  // getData(){
  //   const url ='http://localhost:3001/event/submission'
  
  //   this.http.get(url).subscribe((res)=>{
  //     this.data = res
  //     console.log(this.data)
  //   })
  // }
}
