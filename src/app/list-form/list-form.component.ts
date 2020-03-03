import { Component, OnInit } from '@angular/core';
import { FormConfig } from '../models/formConfig.model';
import { FormConfigService } from '../services/form-config.service';

@Component({
  selector: 'app-list-form',
  templateUrl: './list-form.component.html',
  styleUrls: ['./list-form.component.scss']
})
export class ListFormComponent implements OnInit {
  listFormulaires: FormConfig[] = [];
  errorMessage: string = "default";
  dataLoaded: boolean = false;
  listLoaded: boolean = false;
  // bouchon
  unTicket: FormConfig;

  constructor(private formConfigService: FormConfigService) {
   }

  ngOnInit() {
    // this.getListeTickets(); // TODO en attente back
    // bouchon
    this.getFormConfigbyRef('3');
    this.getFormConfigbyRef('4');
    console.log(this.errorMessage);
  }

  getListeTickets() {
    this.formConfigService.getJSONListForm().subscribe(
      x => {
        console.log(x);
        this.listFormulaires = x;
        this.listLoaded = true;
      },
      error => this.errorMessage = "Erreur lors du chargement des tickets en cours"
    );
  }

  getFormConfigbyRef(ref: string) {
    this.formConfigService.getJSONbyRef(ref).subscribe(
      x => {
        console.log(x);
        this.unTicket = x;
        this.dataLoaded = true;
        console.log('*****' + this.unTicket);
        this.listFormulaires.push(this.unTicket);
      },
      error => this.errorMessage = "Erreur lors du GetJson  "
    );
  }
}