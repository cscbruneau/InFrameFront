export class Champ {

    constructor(
        public id: number, // identifiant de l'élément
        public groupeId: number, // identifiant du groupe
        public typeDemandeId: number,
        public nomChamp: string,
        public typeChamp: string,
        public nomInterface: string,
        public estDynamique: boolean,
        public parametreChamp: string,
        public ordre: number,
        public tooltip: string,
        public valeurDefaut: string,
        public statut: number,
        public etat: number,
        public comportement: number
    )
    {}

}