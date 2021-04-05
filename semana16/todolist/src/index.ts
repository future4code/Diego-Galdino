
import app from "./app";
import { putUser } from "./endpoints/putUser";
import { getUserById } from "./endpoints/getUserById";
import { postUser } from "./endpoints/postUser";
import { putTask } from "./endpoints/putTask";
import { getTaskById } from "./endpoints/getTaskById";
import { getUsers } from "./endpoints/getUsers";
import { getTaskByUserId } from "./endpoints/getTaskByUserId";
import { getUserByName } from "./endpoints/getUserByName";

app.get("/user/all", getUsers)
app.get("/user", getUserByName)
app.get("/user/:id", getUserById)
app.get("/task", getTaskByUserId)
app.get("/task/:id", getTaskById)
app.post("/user/:id", postUser)
app.put("/user",putUser)
app.put("/task",putTask)
