import knex from 'knex'
import dotenv from 'dotenv'

dotenv.config()

const connection = knex({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA,
        port: 3306,
        multipleStatements: true
    }
})

export const tbUser = "cookenu_users"
export const tbRecipe = "cookenu_recipes"
export const tbUserFollow = "cookenu_users_following"

export default connection