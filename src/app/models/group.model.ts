import { Field } from './field.model';
export class Group {

    constructor(
        public id: number, // identifiant du groupe
        public formId: number, // identifiant du formulaire
        public title: string,
        public columnIndex: number,
        public groupOrder: number,
        public active: boolean,
        public behavior: number,
        public formFields?: Field[]
    ) { }
}