import "reflect-metadata"
import { DataSource } from "typeorm"
// import { User } from "./dao/entity/User"
// import { Auth } from "./dao/entity/Auth"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "xeozone",
    database: "typeorm",
    synchronize: true,
    logging: false,
    entities: ['src/dao/entity/**/*.ts',],
    migrations: [],
    subscribers: [],
})

AppDataSource.initialize()
    .then(() => console.log("Database connected successfully"))
    .catch(() => console.log("Error connecting to database"));