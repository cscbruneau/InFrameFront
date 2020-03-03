import { Component, OnInit } from '@angular/core';
import { Field } from '../../../models/field.model';
import { Group } from '../../../models/group.model';
import { FormConfig } from '../../../models/formConfig.model';
import { GenericInputComponent } from '../../Commmon/generic-input/generic-input.component';
import { FormConfigService } from '../../../services/form-config.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss']
})
export class TicketFormComponent implements OnInit {
  // **** Construction du formulaire
  // Objects
  form: FormConfig;
  groups: Group[] = [];
  fields: Field[] = [];
  dataLoaded: boolean = false;
  errorMessage: string = "default";
  // Présentation
  columnWidthClass: string;
  listIndexColumns: number[] = [];
  // Données
  formConfigId: string;
  ticketId: string;
  isNewTicket: boolean = false;

  constructor(private formConfigService: FormConfigService, private route: ActivatedRoute) {
    // this.route.params.subscribe(s => { if (this.requestType != null && s.type != this.requestType) this.ngOnInit(); });
  }
  /**
   * A l'initialisation du formulaire, on vérifie :
   *  - identifiant type de formulaire
   *  - identifiant du ticket : -1 pour new
   */

  ngOnInit() {
    // Récupération du type de formulaire à partir de la route
    this.formConfigId = '4';
    this.route.params.forEach(
      (params) => {
        this.formConfigId = params["formConfigId"];
        this.ticketId = params["ticketId"];
        // console.log('Type',this.formConfigId,this.ticketId) ;
      }
    );
    // Est ce un nouveau ticket ? 
    if (this.ticketId == '-1') {
      this.isNewTicket = true;
    }

    // Récupération de la structure du formulaire
    this.getFormConfig(this.formConfigId);

    // Récupération des données du tickets pour ticket existant
    if (this.isNewTicket) {
      this.getTicketData();
    }

    console.log(this.errorMessage);
  }

  getFormConfig(refTypeFormulaire: string) {
    this.formConfigService.getJSONbyRef(refTypeFormulaire).subscribe(
      x => {
        console.log(x);
        this.form = x;
        this.getColumnWidthClass();
        this.getColumns();
        this.dataLoaded = true;
      },
      error => this.errorMessage = "Erreur lors de la récupération des données du formulaire "
    );
  }

  getTicketData() {
    console.log('On recupère les données du ticket !!! yipi ! ');
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