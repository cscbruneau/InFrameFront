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
  @Input() labelBehavior: null;
  fieldValue: string;
  checkboxListPossibleValues: any[];
  checkboxGroupName: string;
  radioButtonListPossibleValues: any[];
  radioButtonGroupName: string;
  inputParamValue: any[];
  valueDate: Date;
  colorValue: string;
  fieldValueNumber: number;

  taskForm: FormGroup;

  constructor() {

    /** Cas à traiter
     * -- text
     * -- number
     * -- checkbox
     * -- radio
     * tel
     * -- email
     * -- password
     * -- date
     * -- month
     * week
     * -- time
     * url
     * file
     * -- submit
     * range
     * search
     * -- reset
     * -- color
     */
    /** Bouchon */
    this.fieldValue = 'valeur du champs todo';// variable à récupérer via API
    this.checkboxListPossibleValues = ['New York', 'San Francisco', 'Los Angeles'];
    this.checkboxGroupName = 'Ville';
    this.radioButtonListPossibleValues = ['Admin', 'User', 'Superviseur', 'Visiteur'];
    this.radioButtonGroupName = 'Fonction';
    this.inputParamValue = [];
    this.valueDate = new Date();
  }

  ngOnInit() {
    console.log('champs transmis', this.inputParam);
    console.log('type : ' + this.inputParam.fieldType);
    console.log('id : ' + this.inputParam.id);
    console.log('fieldName : ' + this.inputParam.fieldName);

  }

  valueChanged() {
    console.log('Valeur variable', this.inputParamValue);

  }
  handleClick(){
    console.log('Action sur bouton ');
  }
}
