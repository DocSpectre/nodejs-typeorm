import "reflect-metadata";
import { DataSource } from "typeorm";
import 'dotenv/config';
// import { User } from "./dao/entity/User"
// import { Auth } from "./dao/entity/Auth"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.PG_HOST,
    port: parseInt(process.env.PG_PORT) || 5432,
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    synchronize: true, // Temporary true to synchronize database while on dev mode -- bad for prod 
    logging: false,
    entities: ['src/dao/entity/**/*.ts',],
    migrations: [],
    subscribers: [],
})

AppDataSource.initialize()
    .then(() => console.log("Database connected successfully"))
    .catch(() => console.log("Error connecting to database"));