import { Component, Input, OnInit } from '@angular/core';
import {FormGroup, FormBuilder } from '@angular/forms';
import { FormField } from '../form-field';
import { HttpClient } from "@angular/common/http";
import { FormfieldControlService } from '../form-field-control.service';
import { ClaimServiceService } from '../claim-service.service';
import { Response } from 'selenium-webdriver/http';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  @Input() formFields: FormField<string>[] = [];
  form: FormGroup;
  payLoad = ' ';
  public data:any = []
  
  constructor(private formfieldService: FormfieldControlService,
              private fb: FormBuilder,
              private http: HttpClient,
              private claimservice:ClaimServiceService ) { }

  ngOnInit(): void {
    this.form = this.formfieldService.toFormGroup(this.formFields);
    // this.form = this.fb.group(
    //   {
    //     claimid: '',
    //     name: '',
    //     email: '',
    //     status: '',
    //     agree: true,
    //     sex: 'Male'
      
    //   }

    //     );

      

     this.getData();
  }

  getData(){
    const url ='http://localhost:3001/event/submission'
  
    this.http.get(url).subscribe((res)=>{
      this.data = res
      console.log(this.data[0].data)
      this.form.patchValue({
             claimid: this.data[0].data.claimId,
              name: this.data[0].data.name,
              email: this.data[0].data.email,
              status: this.data[0].data.status
                   
             }) 

             
    })
  }

  
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
    this.claimservice.claimEdit( this.form.value)
    .subscribe(
      response => console.log('Success!', response),
      error => console.error('Error!', error)
    );
  }

  reset() {
    this.form.reset();
  }

  

}
