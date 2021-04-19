import app from "./app"
import {createUser} from './endpoints/createUser'
import {login} from './endpoints/login'
import deleteUser from "./endpoints/deleteUser"
import {getProfile} from "./endpoints/getProfile"
import { getProfileById } from "./endpoints/getProfileById"
import { createRecipe } from "./endpoints/createRecipe"
import { getRecipeById } from "./endpoints/getRecipeById"
import { followingUser } from "./endpoints/followingUser"
import { unfollowingUser } from "./endpoints/unfollowingUser"
import { getFeed } from "./endpoints/getFeed"
import editRecipe from "./endpoints/editRecipe"
import deleteRecipe from "./endpoints/deleteRecipe"

app.get("/user/profile",getProfile)
app.get("/user/feed",getFeed)
app.get("/user/:id",getProfileById)
app.get("/recipe/:id",getRecipeById)
app.post('/user/signup', createUser)
app.post('/recipe', createRecipe)
app.post('/user/login', login)
app.post('/user/follow', followingUser)
app.post('/user/unfollow', unfollowingUser)
app.put('/recipe/edit', editRecipe)
app.delete("/user/:id", deleteUser)
app.delete("/recipe/:id", deleteRecipe)