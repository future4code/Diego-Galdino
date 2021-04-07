import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import login from './endpoints/login'
import deleteUser from "./endpoints/deleteUser"
import getIdEmail from "./endpoints/getIdEmail"
import createAddress from "./endpoints/createAddress"

app.get("/user",getIdEmail)
app.post('/user/signup', createUser)
app.post('/user/login', login)
app.post('/user/address', createAddress)
app.put('/user/edit', editUser)
app.delete("/user/:id", deleteUser)