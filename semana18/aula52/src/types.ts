export type authenticationData = {
   id: string
   role: string
}

export type userCredentials = {
   email: string
   password: string
}

export type userPersonalInfo = {
   name: string
   nickname: string
}

export enum userRole {
   ADMIN = "admin",
   NORMAL = "normal"
}

export type addressInfo = {
   street: string
   neighbourhood: string
   city: string
   state: string
}

export type user = {id: string, email: string, name: string, nickname: string, password: string, role: userRole}