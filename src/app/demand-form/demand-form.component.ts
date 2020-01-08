import { Component, OnInit } from '@angular/core';
import { Form } from '../models/form.model';
import { FormField } from '../models/formfield.model';
import { FormGroup } from '../models/formgroup.model';
declare var require: any;
var config = require('../_files/test.json');

@Component({
  selector: 'app-demand-form',
  templateUrl: './demand-form.component.html',
  styleUrls: ['./demand-form.component.scss']
})


export class DemandFormComponent implements OnInit {

  columnClassGridWidth: string;
  numberOfColumns: number;
  form: Form;
  listOfColumns: number[] = [];
  groups: FormGroup[] = [];
  fields: FormField[] = [];

  constructor() { }

  ngOnInit() {
    this.form = config.form;
    this.setColumnWith();
    this.getListOfColumns();
  }

  setColumnWith() {
    this.columnClassGridWidth = 'col-md-' + (12 / this.form.columnNumber).toString();
  }

  getListOfColumns() {
    for (let i = 1; i <= this.form.columnNumber; i++) {
      //console.log(i + ' ' + this.form.columnNumber);
      this.listOfColumns.push(i);
      //console.log(i);
    }
  }

  getGroupsOfColumn(columnIndex: number) {
    console.log(columnIndex);
    //console.log(this.form);
    this.groups.splice;
    this.form.formGroups.forEach(fG => {
      this.groups.push(fG);
      if(fG.columnIndex = columnIndex)
        this.groups.push(fG);
    });
    console.log(this.groups);
return this.groups;
  }

  getFieldsOfGroup(groupIndex: number){
    this.fields = this.form.formGroups[groupIndex].formFields;
  }

}
