import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import login from './endpoints/login'
import deleteUser from "./endpoints/deleteUser"
import getIdEmail from "./endpoints/getIdEmail"

app.get("/user",getIdEmail)
app.post('/user/signup', createUser)
app.post('/user/login', login)
app.put('/user/edit', editUser)
app.delete("/user/:id", deleteUser)