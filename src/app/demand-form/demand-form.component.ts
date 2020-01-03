import { Component, OnInit } from '@angular/core';
import { Field } from '../models/field.model';
import { Group } from '../models/group.model';
import { FormConfig } from '../models/formConfig.model';


import { GenericInputComponent } from '../generic-input/generic-input.component';

@Component({
  selector: 'app-demand-form',
  templateUrl: './demand-form.component.html',
  styleUrls: ['./demand-form.component.scss']
})
export class DemandFormComponent implements OnInit {
  unChamp: Field;
  unGroup: Group;
  frmConfig: FormConfig;

  constructor() {
    /* Bouchon */
    /** Création d'un champs test */
    this.unChamp = new Field(
      1,                                    // identifiant de l'élément
      1,                                    // identifiant du groupe
      3,                                    // typeDemandeId: number,
      'Nom',                                // nomChamp: string,
      'input',                              // typeChamp: string,
      'Nom',                                // nomInterface: string,
      true,                                 // estDynamique: boolean,
      null,                                 // parametreChamp: string,
      1,                                    // ordre: number,
      'Préciser le nom de l\'utilisateur',  // tooltip: string,
      'Nom',                                // valeurDefaut: string,
      true,                                 // statut: number,
      1,                                    //  etat: number,
      null                                  // comportement: number
    );
    /** Création d'un groupe test */
    this.unGroup = new Group(
      1,                                    // identifiant du groupe 
      1,                                    // idenifiant du formulaire
      1,                                    // index de la colonne
      1,                                    // ordre
      true,                                 // actif ?
      1,                                    // Comportement
      [this.unChamp]);                      // Liste des champs
      /** Création d'un forulaire */
    this.frmConfig = new FormConfig(
      1,                                    // identifiant formulaire
      'test',                               // nom du formulaire
      1,                                    // titre
      true,                                 // actif ?
       1,                                   // comportement
      [this.unGroup]);                     // liste des groupes
    console.log(this.unGroup);
    console.log(this.unGroup.formFields);
  }

  ngOnInit() {
  }

  getColumns() {
    return [1];
  }

  getGroupsOfColumn() {
    return [this.unGroup];
  }
  getFieldsOfGroup(groupIndex: number) {
    return this.unGroup;
  }
}
