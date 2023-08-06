import { DataSource } from "typeorm"
import "reflect-metadata"
import * as dotenv from "dotenv"

dotenv.config();

export const UserData =  new DataSource ({
    type: "postgres",
    host: "localhost",
    username: "postgres",
    password: "gayu@love",
    port: 5432,
    database: "demo",
    synchronize: true,
    entities : ["src/Entity/*.ts"]
})

