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
   ADMIN = "ADMIN",
   NORMAL = "NORMAL"
}

export type user = { id: string, email: string, name: string, password: string, role: userRole }
export type signupInput = { email: string, name: string, password: string, role: string }

export const convertStringToUserRole = (role: string): userRole => {
   switch (role) {
      case "NORMAL":
         return userRole.NORMAL
         break;
      case "ADMIN":
         return userRole.ADMIN
         break;
      default:
      throw new Error("Os valores possíveis para 'role' são normal e admin")
   }
}