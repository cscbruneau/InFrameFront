import { FormField } from './formfield.model';

export class FormGroup {

    constructor(
        public id: number, // identifiant du groupe
        public formId: number, // identifiant du formulaire
        public columnIndex: number,
        public groupOrder: number,
        public active: boolean,
        public behavior: number,
        public formFields: FormField[]
    )
    {}

}