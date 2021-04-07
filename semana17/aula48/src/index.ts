import app from './app'
import { getAllUsers } from './endpoints/getAllUsers'
import { getAllUsersLimit } from './endpoints/getAllUsersLimit'
import { getAllUsersOrder } from './endpoints/getAllUsersOrder'
import { getUserByName } from './endpoints/getUserByName'
import { getUserByType } from './endpoints/getUserByType'


app.get("/user/search", getUserByName)
app.get("/user/limited", getAllUsersLimit)
app.get("/user", getAllUsersOrder)
app.get("/user", getAllUsers)
app.get("/user/:type", getUserByType)
