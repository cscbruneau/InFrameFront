import { Group } from './group.model';

export class FormConfig {

    constructor(
        public id: number, // identifiant du formulaire
        public title: string, // nom du formulaire
        public columnNumber: number,
        public active: boolean,
        public behavior: number,
        public formGroups?: Group[]
    )
    {}
}