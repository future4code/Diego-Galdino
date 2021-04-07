export type authenticationData = {
   id: string
}
export type userCredencials = {
   email: string
   password: string
}
export type userPersonalInfo = {
   name: string
   nickname: string
}


export type user = authenticationData & userCredencials & userPersonalInfo