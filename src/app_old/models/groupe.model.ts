export class Groupe {

    constructor(
        public id: number, // identifiant du groupe
        public formulaireId: number, // identifiant du formulaire
        public typeGroupe: string, // fieldset, card, ...
        public colonne: number,
        public ordre: number,
        public comportement: number
    )
    {}

}