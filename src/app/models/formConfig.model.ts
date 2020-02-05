import { Group } from './group.model';

export class FormConfig {

    constructor(
        public id: number, // identifiant du formulaire
        public formNature: string,
        public title: string, // nom du formulaire
        public columnNumber: number,
        public active: boolean,
        public validationMessage: string,
        public cssClass: string,
        public behavior: number,
        public formGroups?: Group[]
    )
    {}
}