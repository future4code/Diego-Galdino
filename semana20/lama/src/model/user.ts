
export interface authenticationData {
    id: string,
    userRole:USER_ROLE
}

export interface user extends authenticationData {
    name: string,
    email: string,
    password: string
}

export class User implements authenticationData {

    constructor(
        public id: string,
        private name: string,
        private email: string,
        private password: string,
        public userRole:USER_ROLE
    ) { }

    getId(): string { return this.id }
    getName(): string { return this.name }
    getEmail(): string { return this.email }
    getPassword(): string { return this.password }
    getUserRole(): string { return this.userRole }

    setPassword(password: string): void { this.password = password }
}

export interface signupInput {
    name: string,
    email: string,
    password: string,
    userRole:USER_ROLE
}

export interface loginInput {
    email: string
    password: string
}
export enum USER_ROLE {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
 }