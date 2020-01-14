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
  regExpKeyFilter: RegExp;
  flagRegExValide: boolean;
  messageAlert:string;
  checkboxListPossibleValues: any[];
  checkboxGroupName: string;

  inputParamValue: any[];
  valueDate: Date;
  colorValue: string;

  fieldParameters: any;
  taskForm: FormGroup;

  fieldsTypeLabelStandard: Array<{ fieldType: string, isLabelStandard: boolean }>;



  constructor() {

    this.fieldsTypeLabelStandard = [
      { fieldType: 'inputText', isLabelStandard: true },
      { fieldType: 'password', isLabelStandard: true },
      { fieldType: 'checkbox', isLabelStandard: false },
      { fieldType: 'radio', isLabelStandard: false },
      { fieldType: 'date', isLabelStandard: true },
      { fieldType: 'month', isLabelStandard: true },
      { fieldType: 'time', isLabelStandard: true },
      { fieldType: 'color', isLabelStandard: true },
      { fieldType: 'number', isLabelStandard: true },
      { fieldType: 'email', isLabelStandard: true },
      { fieldType: 'button', isLabelStandard: false },
      { fieldType: 'reset', isLabelStandard: false },
      { fieldType: 'tel', isLabelStandard: true },
      { fieldType: 'keyfilter', isLabelStandard: true },
      { fieldType: 'dropdown', isLabelStandard: true },
      { fieldType: 'selectbutton', isLabelStandard: true },
      { fieldType: 'multiselect', isLabelStandard: true }
    ]

  }

  ngOnInit() {

    console.log('champs transmis', this.inputParam);
    console.log( this.inputParam.fieldName);
  

    this.fieldParameters = this.inputParam.fieldParameters;
    if (this.inputParam.fieldType=='keyfilter'){
      this.regExpKeyFilter = new RegExp(this.fieldParameters['regExp']);
      console.log( this.regExpKeyFilter);

    }
   
   
  }

  checkFieldParameters() {

  }

  valueChanged() {
    console.log('Valeur variable', this.inputParamValue);
  }

  isStandardLabel() {
    let verifExistTypeField;
    verifExistTypeField = this.fieldsTypeLabelStandard.findIndex(x => x.fieldType === this.inputParam.fieldType);
    //console.log(this.inputParam.fieldName + ' '+ this.inputParam.fieldType +  verifExistTypeField);
    // ajouter vérif si fieldtype inexistant
    if (verifExistTypeField > -1) {
      return this.fieldsTypeLabelStandard.find(x => x.fieldType === this.inputParam.fieldType).isLabelStandard;
    } else {
      console.log(this.inputParam.fieldType + ' non trouvé');
      return false;
    }
  }

  verifMatchRexExp(regExpString: string) {
    console.log("valeur mail : " + this._value);
    console.log("Expression reguliere : " + regExpString);
    let regExpTest;
    regExpTest = new RegExp(regExpString);
    console.log("Expression reguliere : " + regExpTest)
    //if (!this._value == null && !regExpTest.test(this._value)) {
      if ( !regExpTest.test(this._value)) {
      this.messageAlert = "Renseigner un mail valide";
    } else {
      this.flagRegExValide = true;
      this.messageAlert = "";
    }
    console.log("message alert" + this.messageAlert);
  }

  handleClick() {
    console.log('Action sur bouton ');
  }
}
