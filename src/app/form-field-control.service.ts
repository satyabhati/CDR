import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { of } from 'rxjs';
import { FormField } from './form-field';

@Injectable({
  providedIn: 'root'
})
export class FormfieldControlService {

  constructor() { }

  toFormGroup(inputs: FormField<string>[]): FormGroup {
    const group: any = {};
    inputs.forEach(input => {
      let validator: ValidatorFn[] = input.required ? [Validators.required] : [];
      switch (input.validator) {
        case "email":
          validator.push(Validators.email);
          break;
        default:
          break;
      }
      group[input.key] = validator.length > 0 ? new FormControl(input.value || '', validator)
                                        : new FormControl(input.value || '');
    });

    return new FormGroup(group);
  }

 accountFormFields() {

    const inputs: FormField<string>[] = [


      new FormField<string>({
        controlType: "textbox",
        key: 'accountid',
        label: 'Account ID',
        required: true,
        order: 1
      }),


      new FormField<string>({
        controlType: "textbox",
        key: 'accountname',
        label: 'Account Name',
        required: true,
        order: 2
      }),

    

      new FormField<string>({
        controlType: "dropdown",
        key: 'status',
        label: 'status',
        options: [
          {key: 'active',  value: 'Active'},
          {key: 'inactive',  value: 'Inactive'},
          {key: 'disabled',   value: 'Disabled'}
        ],
        order: 3
      }),
      new FormField<string>({
        controlType: "textarea",
        key: 'message',
        label: 'Mesage',
        type: 'textarea',
        order: 4
      })
    

  
    ];

    return of(inputs.sort((a, b) => a.order - b.order));
  }

  claimFormFields() {
    
        const inputs: FormField<string>[] = [
    
    
          new FormField<string>({
            controlType: "textbox",
            key: 'claimid',
            label: 'Claim ID',
            required: true,
            order: 1
          }),
    
    
          new FormField<string>({
            controlType: "textbox",
            key: 'name',
            label: 'Name',
            required: true,
            order: 2
          }),
    
          new FormField<string>({
            controlType: "textbox",
            key: 'email',
            label: 'Email',
            type: 'email',
            required: true,
            validator: "email",
            order: 3
          }),
    
          new FormField<string>({
            controlType: "dropdown",
            key: 'status',
            label: 'status',
            options: [
              {key: 'active',  value: 'Active'},
              {key: 'inactive',  value: 'Inactive'},
              {key: 'disabled',   value: 'Disabled'}
            ],
            order: 4
          }),
    
          new FormField<string>({
            controlType: "checkbox",
            key: 'agree',
            label: 'I accept terms and services',
            type: 'checkbox',
            required: true,
            order: 5
          }),
    
          new FormField<string>({
            controlType: "radio",
            key: 'sex',
            label: 'Sex',
            type: 'radio',
            options: [
              {key: 'male',  value: 'Male'},
              {key: 'female',  value: 'Female'}
            ],
            order: 6
          }),
    
      
        ];
    
        return of(inputs.sort((a, b) => a.order - b.order));
      }
    

}