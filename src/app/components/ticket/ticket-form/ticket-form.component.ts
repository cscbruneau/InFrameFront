import { Component, OnInit } from '@angular/core';
import { Field } from '../../../models/field.model';
import { Group } from '../../../models/group.model';
import { FormConfig } from '../../../models/formConfig.model';
import { GenericInputComponent } from '../../Commmon/generic-input/generic-input.component';
import { FormConfigService } from '../../../services/form-config.service';


@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss']
})
export class TicketFormComponent implements OnInit {

  errorMessage: string = "default";
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
    this.formConfigService.getJSONbyRef('4').subscribe(
      x => {
        console.log(x);
        this.form = x;
        this.getColumnWidthClass();
        this.getColumns();
        this.dataLoaded = true;
      },
      error => this.errorMessage = "Erreur lors du GetJson  "
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
    }

    this.form.formGroups.filter(group => group.columnIndex === colIndex).forEach(group => {
      this.groups.push(group);
    });

    //console.log(this.groups[0]);
    return this.groups;
  }
}