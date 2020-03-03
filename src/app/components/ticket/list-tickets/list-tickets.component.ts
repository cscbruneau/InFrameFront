import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { FormConfigService } from '../../../services/form-config.service';
import { AgGridAngular } from 'ag-grid-angular';
import { JsonPipe } from '@angular/common';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-tickets',
  templateUrl: './list-tickets.component.html',
  styleUrls: ['./list-tickets.component.scss']
})
export class ListTicketsComponent implements OnInit {

  errorMessage: string = '';
  // **** Gestion des types de demandes
  optionTypeForm: any;
  optionTypeFormLoaded: boolean = false;
  optionSelected: any[];
  typeFormSubsisption: Subscription;

  // **** Gestion de la grille
  @ViewChild('agGrid', { static: false }) agGrid: AgGridAngular;
  rowDataTicket: any;
  rowDataLoaded: boolean = false;
  rowDataSubscription: Subscription;
  private gridApi;
  private gridColumnApi;
  private rowSelection;

  // Définition de l'apparence du tableau
  headerHeight: 175;
  //Définition des colonnes 
  columnDefs = [
    { headerName: '#', field: 'id', resizable: true, sortable: true, filter: true, width: 40 },
    { headerName: 'Titre', field: 'ticketTitle', resizable: true, sortable: true, filter: true },
    { headerName: 'Type', field: 'typeId', resizable: true, sortable: true, filter: true, width: 70 },
    { headerName: 'Projet', field: 'project', resizable: true, sortable: true, filter: true },
    { headerName: 'Date de création', field: 'createDate', resizable: true, sortable: true, filter: true },
    { headerName: 'statut', field: 'ticketStatus', resizable: true, sortable: true, filter: true, width: 90 },
    { headerName: 'Criticité', field: 'criticality', resizable: true, sortable: true, filter: true, width: 90 },
    { headerName: 'Auteur', field: 'author', resizable: true, sortable: true, filter: true }
  ];

  constructor(private http: HttpClient, private formConfigService: FormConfigService, private router: Router) { }

  ngOnInit() {
    // **** Récupération des données
    // Type de formulaires disponibles
    this.typeFormSubsisption = this.formConfigService.getJSONListeTypeForm().subscribe(
      x => {
        // console.log(x); //debug
        this.optionTypeForm = this.getFormatOptionDropdown(x);
        this.optionTypeFormLoaded = true;
      },
      error => this.errorMessage = 'Erreur lors de la récupération des types de formulaire'
    );
    this.optionSelected = [];

    // Listes des tickets en cours
    this.rowDataSubscription = this.formConfigService.getJSONListTicket().subscribe(
      x => {
        // console.log(x); //debug
        this.rowDataTicket = x;
        this.rowDataLoaded = true;
        console.log('Liste des tickets');
        console.log(this.rowDataTicket);
      },
      error => this.errorMessage = 'Erreur lors de la récupération des types de formulaire'
    );
    this.rowSelection = 'single';
  }

  /**
   * Convertit 
   *  la liste des données reçues par le Json
   *  en tableau clef/valeur
   *  pour affichage dans une liste d'option PrimeNG
   * @param optionToConvert tableau de valeur
   */
  getFormatOptionDropdown(optionToConvert: any[]) {
    const formatDropDown: any[] = [];
    optionToConvert.forEach(element => {
      formatDropDown.push({ name: element });
    });
    return formatDropDown;
  }

  /**
   * Appelé pour création d'une nouvelle intervention ( demand / ticket)
   * @param form 
   */
  onSubmitNew(form: NgForm) {
    // TODO rechercher formConfigId
    //const typeTicket = this.optionSelected['typeId'];
    const typeTicket = '4';
    this.router.navigate(['/ticket/new/' + typeTicket]);
    /*const type = this.optionSelected['name'];
    switch (type) {
      case 'demand': {
        this.router.navigate(['/demand/new']);
        break;
      }
      case 'ticket': {
        this.router.navigate(['/ticket/new']);
        break;
      }
      default: {
        break;
      }
    }*/
  }

  /**
   * Appelé pour la visualisation d' une intervention existante
   * @param form
   */
  onSubmitView(form: NgForm) {
    const selectedRows = this.gridApi.getSelectedRows();
    console.log('*****' + selectedRows.type);
    if (selectedRows) {
      const refInter = selectedRows[0].id;
      const selectedType = selectedRows[0].typeId;
      console.log(selectedRows);
      console.log(refInter);
    }
  }

  ngOnDestroy() {
    this.typeFormSubsisption.unsubscribe();
    this.rowDataSubscription.unsubscribe();
  }

  onSelectionChanged() {
    console.log('onSelectionChanged');
    const selectedRows = this.gridApi.getSelectedRows();
    console.log(selectedRows);
    const refInter = selectedRows[0].id;
    const selectedType = selectedRows[0].typeId;
    console.log(refInter);
  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);
    //  const selectedDataStringPresentation = selectedData.map(node => node.make + ' ' + node.model).join(', ');
    //  alert(`Selected nodes: ${selectedDataStringPresentation}`);

    console.log(selectedNodes);
    console.log(selectedData);
    //  console.log(selectedDataStringPresentation);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

}
