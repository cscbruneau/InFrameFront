export class FormField {

    constructor(
        public id: number, // identifiant de l'élément
        public groupId: number, // identifiant du groupe
        public demandTypeId: number,
        public fieldName: string,
        public fieldType: string,
        public fieldLabel: string,
        public isDynamic: boolean,
        public fieldParameters: string,
        public fieldOrder: number,
        public tooltip: string,
        public defaultValue: string,
        public active: number,
        public workflowState: number,
        public behavior: number
    )
    {}

}