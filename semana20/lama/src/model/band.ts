
export class Band  {

    constructor(
        public id: string,
        private name: string,
        private genre: string,
        private responsible: string,

    ) { }

    getId(): string { return this.id }
    getName(): string { return this.name }
    getGenre(): string { return this.genre }
    getResponsible(): string { return this.responsible }
}

export interface bandInput {
    name: string,
    genre: string,
    responsible: string,
}
