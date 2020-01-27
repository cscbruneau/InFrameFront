import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormConfigService } from '../services/form-config.service';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  // Gestion des types de demandes
  optionTypeForm: any[] = [];
  // Gestion de la grille
  @ViewChild('agGrid', { static: false }) agGrid: AgGridAngular;
  rowDataTicket: any;
  private gridApi;
  private gridColumnApi;

  // Définition de l'apparence du tableau
  headerHeight: 175;

  // Tableau de base
  /*columnDefs = [
    { headerName: '#', field: 'id', resizable: true, sortable: true, filter: true },
    { headerName: 'Titre', field: 'title', resizable: true, sortable: true, filter: true },
    { headerName: 'Type', field: 'type', resizable: true, sortable: true, filter: true },
    { headerName: 'Projet', field: 'project', resizable: true, sortable: true, filter: true },
    { headerName: 'Date de création', field: 'datecrea', resizable: true, sortable: true, filter: true },
    { headerName: 'Avancement', field: 'workflowStateId', resizable: true, sortable: true, filter: true },
    { headerName: 'Criticité', field: 'criticality', resizable: true, sortable: true, filter: true },
    { headerName: 'Auteur', field: 'author', resizable: true, sortable: true, filter: true }  
  ];*/

  columnDefs = [
    {
      headerName: "Proprietes fixes",
      children: [
        { headerName: '#', field: 'id', resizable: true, sortable: true, filter: true },
        { headerName: 'Date de création', field: 'datecrea', resizable: true, sortable: true, filter: true },
        { headerName: 'Auteur', field: 'author', resizable: true, sortable: true, filter: true },
        { headerName: 'Avancement', field: 'workflowStateId', resizable: true, sortable: true, filter: true },
        { headerName: 'Type', field: 'type', resizable: true, sortable: true, filter: true }
      ]
    },
    {
      headerName: "Proprietes dynamiques",
      children: [
        { headerName: 'Objet', field: 'title', sortable: true, filter: true },
        { headerName: 'Responsable', field: 'responsable', sortable: true, filter: true },
        { headerName: 'Contact', field: 'contact', sortable: true, filter: true },
        { headerName: 'Client', field: 'client', sortable: true, filter: true }
      ]
    }
  ];

  constructor(private http: HttpClient, private formConfigService: FormConfigService) {

    // Bouchon
    this.rowDataTicket = [
      { id: '1', datecrea: '20/01/2020', author: 'LOTT', workflowStateId: 'Affecté', type: 'Incident', title: '', responsable: '', contact: 'Laurence', client: 'Inside' },
      { id: '2', datecrea: '01/12/2019', author: 'CBRU', workflowStateId: 'En attente', type: 'Demande licence' },
      { id: '3', datecrea: '05/01/2020', author: 'GTIB', workflowStateId: 'En cours', type: 'Incident' },
      { id: '4', datecrea: '04/01/2020', author: 'GTIB', workflowStateId: 'Affecté', type: 'Incident' },
      { id: '5', datecrea: '19/01/2020', author: 'LOTT', workflowStateId: 'Affecté', type: 'Incident' },
      { id: '6', datecrea: '18/01/2020', author: 'LOTT', workflowStateId: 'A affecter', type: 'Incident' },
      { id: '7', datecrea: '17/01/2020', author: 'LOTT', workflowStateId: 'Affecté', type: 'Incident' },
      { id: '8', datecrea: '16/01/2020', author: 'LOTT', workflowStateId: 'Affecté', type: 'Incident' },
      { id: '9', datecrea: '15/01/2020', author: 'LOTT', workflowStateId: 'Affecté', type: 'Installation serveur' },
      { id: '10', datecrea: '14/01/2020', author: 'LOTT', workflowStateId: 'Affecté', type: 'Incident' },
      { id: '11', datecrea: '14/01/2020', author: 'CBRU', workflowStateId: 'En cours', type: 'Incident' },
      { id: '12', datecrea: '10/01/2020', author: 'CBRU', workflowStateId: 'Affecté', type: 'Demande licence' },
      { id: '13', datecrea: '14/01/2020', author: 'CBRU', workflowStateId: 'Affecté', type: 'Incident' },
      { id: '14', datecrea: '11/01/2020', author: 'CBRU', workflowStateId: 'En cours', type: 'Incident' },
      { id: '15', datecrea: '14/01/2020', author: 'CBRU', workflowStateId: 'Affecté', type: 'Demande licence' },
      { id: '16', datecrea: '14/01/2020', author: 'CBRU', workflowStateId: 'En cours', type: 'Incident' },
      { id: '17', datecrea: '13/01/2020', author: 'CBRU', workflowStateId: 'Affecté', type: 'Incident' },
      { id: '18', datecrea: '12/01/2020', author: 'CBRU', workflowStateId: 'En attente', type: 'Incident' },
      { id: '19', datecrea: '14/01/2020', author: 'CBRU', workflowStateId: 'En cours', type: 'Installation serveur' },
      { id: '20', datecrea: '15/12/2019', author: 'GTIB', workflowStateId: 'Affecté', type: 'Incident' },
      { id: '21', datecrea: '14/12/2019', author: 'GTIB', workflowStateId: 'Affecté', type: 'Incident' },
      { id: '22', datecrea: '13/12/2019', author: 'GTIB', workflowStateId: 'En attente', type: 'Installation serveur' },
      { id: '23', datecrea: '14/12/2019', author: 'GTIB', workflowStateId: 'Affecté', type: 'Incident' },
      { id: '24', datecrea: '18/11/2019', author: 'GTIB', workflowStateId: 'En attente', type: 'Incident' },
      { id: '25', datecrea: '14/06/2019', author: 'GTIB', workflowStateId: 'Affecté', type: 'Incident' },
      { id: '26', datecrea: '14/09/2019', author: 'GTIB', workflowStateId: 'Affecté', type: 'Installation serveur' },
      { id: '27', datecrea: '14/10/2019', author: 'GTIB', workflowStateId: 'En cours', type: 'Demande licence' },
    ];
  }

  ngOnInit() {

    // Récupération des données
    // **** Type de formulaires disponibles
    // Bouchon
    this.optionTypeForm = [
      { name: 'Demande intervention technicien' },
      { name: 'Demande licence' },
      { name: 'Résolution bug' }
    ];
    //this.optionTypeForm = this.formConfigService.getJSONListeTypeForm();

    // **** Listes des tickets en cours
    //this.rowDataTicket = this.http.get('https://api.myjson.com/bins/15psn9'); // exemple 
    //this.rowDataTicket = this.formConfigService.getJSONListTicket(); // TODO attente livraison back
  }

  ngOnDestroy() {

  }

  getSelectedRows() {
    const selectedNodes = this.agGrid.api.getSelectedNodes();
    const selectedData = selectedNodes.map(node => node.data);
    const selectedDataStringPresentation = selectedData.map(node => node.make + ' ' + node.model).join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);

    console.log(selectedNodes);
    console.log(selectedData);
    console.log(selectedDataStringPresentation);
  }

  onGridReady(params) {
    params.
      this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.expandAll();
  }

 

  newTicket() {
    console.log('Nouveau ticket');

  }
}