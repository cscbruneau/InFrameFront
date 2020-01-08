import { FormGroup } from './formgroup.model';

export class Form {

    constructor(
        public id: number, // identifiant du formulaire
        public title: string, // nom du formulaire
        public columnNumber: number, // nombre de colonnes 
        public active: boolean, // formulaire actif/inactif
        public behavior: number, // propriétés de comportement
        public formGroups: FormGroup[]
    )
    {}

}