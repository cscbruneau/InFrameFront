import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Field } from '../models/field.model';

@Component({
  selector: 'app-generic-input',
  templateUrl: './generic-input.component.html',
  styleUrls: ['./generic-input.component.scss']
})
export class GenericInputComponent implements OnInit {

  // Variables entrée 
  @Input() inputParam: Field;
  @Input() labelBehavior: string;
  _value: any = null;
  checkboxListPossibleValues: any[];
  checkboxGroupName: string;

  inputParamValue: any[];
  valueDate: Date;
  colorValue: string;
  
  fieldParameters : any ;
  taskForm: FormGroup;

  fieldsTypeLabelStandard: Array<{fieldType : string, isLabelStandard : boolean}>;

 



  constructor() {

    this.fieldsTypeLabelStandard = [
      {fieldType : 'inputText', isLabelStandard : true},
      {fieldType : 'password', isLabelStandard : true},
      {fieldType : 'checkbox', isLabelStandard : false},
      {fieldType : 'radio', isLabelStandard : true},
      {fieldType : 'date', isLabelStandard : true},
      {fieldType : 'month', isLabelStandard : true},
      {fieldType : 'time', isLabelStandard : true},
      {fieldType : 'color', isLabelStandard : true},
      {fieldType : 'number', isLabelStandard : true},
      {fieldType : 'email', isLabelStandard : true},
      {fieldType : 'submit', isLabelStandard : false},
      {fieldType : 'reset', isLabelStandard : false},
      {fieldType : 'selectbutton', isLabelStandard : true},
      {fieldType : 'multiselect', isLabelStandard : true},
      {fieldType : 'keyfilter', isLabelStandard : true},
      {fieldType : 'dropdown', isLabelStandard : true}
      //dropdown
    ]

  }

  ngOnInit() {

    console.log('champs transmis', this.inputParam);

    this.fieldParameters = this.inputParam.fieldParameters ; 

  }

  checkFieldParameters() {

  }

  valueChanged() {
    console.log('Valeur variable', this.inputParamValue);
  }

  isStandardLabel() {    
    console.log(this.inputParam.fieldType);
       return this.fieldsTypeLabelStandard.find(x => x.fieldType === this.inputParam.fieldType).isLabelStandard; // ajouter vérif si fieldtype inexistant

  }

  handleClick(){
    console.log('Action sur bouton ');
  }
}
