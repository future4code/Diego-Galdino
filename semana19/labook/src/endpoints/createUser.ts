// import { Request, Response } from "express";
// import connection, { tbUser } from "../connection";
// import { generateToken } from "../services/authenticator";
// import { hash } from "../services/hashManager";
// import generateId from "../services/idGenerator";
// import { user, userRole } from "../types";

// export const createUser = async (req: Request, res: Response): Promise<void> => {
//    try {
//       const { name, email, password, role } = req.body

//       if (!name || !email || !password || !role) {
//          res.statusCode = 422
//          throw new Error("Preencha os campos 'name', 'password', 'email' e 'role'")
//       }

//       if (role.toUpperCase() !== userRole.ADMIN && role.toUpperCase() !== userRole.NORMAL) {
//          res.statusCode = 422
//          throw new Error("Os valores possíveis para 'role' são normal e admin")
//       }

//       const [user] = await connection(tbUser).where({ email })
//       if (user) {
//          res.statusCode = 409
//          throw new Error('Email já cadastrado')
//       }

//       const id: string = generateId()
//       const hashPassword = await hash(password)
//       const newUser: user = { id, name, email, password: hashPassword, role: role.toUpperCase() }
//       await connection(tbUser).insert(newUser)
//       const token: string = generateToken({ id, role })
//       res.status(201).send({ access_token: token })

//    } catch (error) {
//       if (res.statusCode === 200) {
//          res.status(500).send({ message: "Internal server error" })
//       } else {
//          res.send({ message: error.message })
//       }
//    }
// }