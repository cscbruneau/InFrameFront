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
  champ1: Field;
  champ2: Field;
  champ3: Field;
  champ4: Field;
  champ5: Field;
  champ6: Field;
  champ7: Field;
  champ8: Field;
  champ9: Field;
  champ10: Field;
  champ11: Field;
  champ12: Field;
  unGroup: Group;
  frmConfig: FormConfig;

  constructor() {
    /* Bouchon */
    /** Création d'un champs test */
    this.champ1 = new Field(
      1,                                    // identifiant de l'élément
      1,                                    // identifiant du groupe
      3,                                    // typeDemandeId: number,
      'nom',                                // nomChamp: string,
      'inputText',                              // typeChamp: string,
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
    this.champ2 = new Field(
      2,                                    // identifiant de l'élément
      1,                                    // identifiant du groupe
      3,                                    // typeDemandeId: number,
      'ville',                              // nomChamp: string,
      'checkbox',                           // typeChamp: string,
      'Ville',                              // nomInterface: string,
      true,                                 // estDynamique: boolean,
      null,                                 // parametreChamp: string,
      2,                                    // ordre: number,
      'Choisir la ville',  // tooltip: string,
      'Nantes',                             // valeurDefaut: string,
      true,                                 // statut: number,
      1,                                    //  etat: number,
      null                                  // comportement: number
    );
    this.champ3 = new Field(
      3,                                    // identifiant de l'élément
      1,                                    // identifiant du groupe
      3,                                    // typeDemandeId: number,
      'fonction',                                // nomChamp: string,
      'radioButton',                              // typeChamp: string,
      'Poste',                                // nomInterface: string,
      true,                                 // estDynamique: boolean,
      null,                                 // parametreChamp: string,
      1,                                    // ordre: number,
      'Préciser le fonction de l\'utilisateur',  // tooltip: string,
      'Fonction',                                // valeurDefaut: string,
      true,                                 // statut: number,
      1,                                    //  etat: number,
      null                                  // comportement: number
    );
    this.champ4 = new Field(
      4,                                    // identifiant de l'élément
      1,                                    // identifiant du groupe
      3,                                    // typeDemandeId: number,
      'password',                           // nomChamp: string,
      'password',                          // typeChamp: string,
      'Mot de passe',                       // nomInterface: string,
      true,                                 // estDynamique: boolean,
      null,                                 // parametreChamp: string,
      1,                                    // ordre: number,
      'Renseigner le mot de passe',  // tooltip: string,
      'password',                           // valeurDefaut: string,
      true,                                 // statut: number,
      1,                                    //  etat: number,
      null                                  // comportement: number
    );
    this.champ5 = new Field(
      5,                                    // identifiant de l'élément
      1,                                    // identifiant du groupe
      3,                                    // typeDemandeId: number,
      'date',                                // nomChamp: string,
      'date',                              // typeChamp: string,
      'Date de ..',                         // nomInterface: string,
      true,                                 // estDynamique: boolean,
      null,                                 // parametreChamp: string,
      1,                                    // ordre: number,
      'Date de début',  // tooltip: string,
      '',                                // valeurDefaut: string,
      true,                                 // statut: number,
      1,                                    //  etat: number,
      null                                  // comportement: number
    );
    this.champ6 = new Field(
      6,                                    // identifiant de l'élément
      1,                                    // identifiant du groupe
      3,                                    // typeDemandeId: number,
      'date',                                // nomChamp: string,
      'month',                              // typeChamp: string,
      'Mois',                               // nomInterface: string,
      true,                                 // estDynamique: boolean,
      null,                                 // parametreChamp: string,
      1,                                    // ordre: number,
      'Mois de début',  // tooltip: string,
      '',                                // valeurDefaut: string,
      true,                                 // statut: number,
      1,                                    //  etat: number,
      null                                  // comportement: number
    );
    this.champ7 = new Field(
      7,                                    // identifiant de l'élément
      1,                                    // identifiant du groupe
      3,                                    // typeDemandeId: number,
      'date',                               // nomChamp: string,
      'time',                               // typeChamp: string,
      'Heure',                              // nomInterface: string,
      true,                                 // estDynamique: boolean,
      null,                                 // parametreChamp: string,
      1,                                    // ordre: number,
      'choix time',                         // tooltip: string,
      '',                                   // valeurDefaut: string,
      true,                                 // statut: number,
      1,                                    //  etat: number,
      null                                  // comportement: number
    );
    this.champ8 = new Field(
      8,                                    // identifiant de l'élément
      1,                                    // identifiant du groupe
      3,                                    // typeDemandeId: number,
      'couleur',                               // nomChamp: string,
      'color',                               // typeChamp: string,
      'Couleur',                              // nomInterface: string,
      true,                                 // estDynamique: boolean,
      null,                                 // parametreChamp: string,
      1,                                    // ordre: number,
      'Couleur du formulaire',              // tooltip: string,
      '',                                   // valeurDefaut: string,
      true,                                 // statut: number,
      1,                                    //  etat: number,
      null                                  // comportement: number
    );
    this.champ9 = new Field(
      9,                                    // identifiant de l'élément
      1,                                    // identifiant du groupe
      3,                                    // typeDemandeId: number,
      'email',                                // nomChamp: string,
      'email',                              // typeChamp: string,
      'Mail',                                // nomInterface: string,
      true,                                 // estDynamique: boolean,
      null,                                 // parametreChamp: string,
      1,                                    // ordre: number,
      'Un champs nombre uniquement',  // tooltip: string,
      '',                                // valeurDefaut: string,
      true,                                 // statut: number,
      1,                                    //  etat: number,
      null                                  // comportement: number
    );
    this.champ10 = new Field(
      10,                                    // identifiant de l'élément
      1,                                    // identifiant du groupe
      3,                                    // typeDemandeId: number,
      'enregistrer',                                // nomChamp: string,
      'submit',                              // typeChamp: string,
      'Enregistrer',                                // nomInterface: string,
      true,                                 // estDynamique: boolean,
      null,                                 // parametreChamp: string,
      1,                                    // ordre: number,
      'Enregistrer les données',  // tooltip: string,
      '',                                // valeurDefaut: string,
      true,                                 // statut: number,
      1,                                    //  etat: number,
      null                                  // comportement: number
    );
    this.champ11 = new Field(
      11,                                    // identifiant de l'élément
      1,                                    // identifiant du groupe
      3,                                    // typeDemandeId: number,
      'annuler',                                // nomChamp: string,
      'reset',                              // typeChamp: string,
      'Annuler / Supprimer',                                // nomInterface: string,
      true,                                 // estDynamique: boolean,
      null,                                 // parametreChamp: string,
      1,                                    // ordre: number,
      'Annuler l\'enregistrement',  // tooltip: string,
      '',                                // valeurDefaut: string,
      true,                                 // statut: number,
      1,                                    //  etat: number,
      null                                  // comportement: number
    );
    this.champ12 = new Field(
      12,                                   // identifiant de l'élément
      1,                                    // identifiant du groupe
      3,                                    // typeDemandeId: number,
      'file',                               // nomChamp: string,
      'file',                               // typeChamp: string,
      'Choose',                             // nomInterface: string,
      true,                                 // estDynamique: boolean,
      null,                                 // parametreChamp: string,
      1,                                    // ordre: number,
      'Annuler l\'enregistrement',          // tooltip: string,
      '',                                   // valeurDefaut: string,
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
      [this.champ1, this.champ2, this.champ3, this.champ4, this.champ5, this.champ6, this.champ7 , this.champ8, this.champ9, this.champ10, this.champ11, this.champ12]);      // Liste des champs
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
