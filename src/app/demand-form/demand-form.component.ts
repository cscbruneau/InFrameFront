import { Component, OnInit } from '@angular/core';
import { Field } from '../models/field.model';
import { Group } from '../models/group.model';
import { FormConfig } from '../models/formConfig.model';
import { GenericInputComponent } from '../components/Commmon/generic-input/generic-input.component';
import { FormConfigService } from '../services/form-config.service';
declare var require: any;


@Component({
  selector: 'app-demand-form',
  templateUrl: './demand-form.component.html',
  styleUrls: ['./demand-form.component.scss']
})
export class DemandFormComponent implements OnInit {

  formConfigAPIRes: any;
  errorMessage: string = 'default';
  dataLoaded: boolean = false;

  form: FormConfig;
  groups: Group[] = [];
  fields: Field[] = [];

  columnWidthClass: string;
  listIndexColumns: number[] = [];

  constructor(private formConfigService: FormConfigService) { }

  ngOnInit() {
    this.getFormConfig();
    console.log(this.errorMessage);
  }

  getFormConfig() {
    console.log('Récupération de la configuration du formulaire');
    this.formConfigService.getJSONbyRef('3').subscribe(
      x => {
        console.log("recu par le service");
        console.log(x);
        this.form = x;
        console.log("transformé en FormConfig ");
        console.log(this.form.validationMessage);
        this.getColumnWidthClass();
        this.getColumns();
        this.dataLoaded = true;
      },
      error => this.errorMessage = 'Incident lors de la récupération du paramètrage du formulaire'
    );
  }

  // construit la class bootstrap pour la colonne
  getColumnWidthClass() {
    this.columnWidthClass = 'col-md-' + (12 / this.form.columnNumber).toString();
    console.log(this.columnWidthClass);
  }
  // contruit la liste des id de colonne
  getColumns() {
    this.listIndexColumns = [];
    let i;
    for (i = 1; i <= this.form.columnNumber; i++) {
      this.listIndexColumns.push(i);
    }
  }

  getGroupsOfColumn(colIndex: number) {
    console.log('indexColonne : ' + colIndex);
    this.groups = [];

    let listIndexGroup: number[] = [];
    let i;
    for (i = 0; i < this.form.formGroups.length; i++) {
      listIndexGroup.push(i);
      //console.log(listIndexGroup);
    }

    this.form.formGroups.filter(group => group.columnIndex === colIndex).forEach(group => {
      this.groups.push(group);
    });

    //console.log(this.groups[0]);
    return this.groups;
  }
}