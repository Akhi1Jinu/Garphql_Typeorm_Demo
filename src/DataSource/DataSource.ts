import { DataSource } from "typeorm"
import "reflect-metadata"
import * as dotenv from "dotenv"

dotenv.config();

export const UserData =  new DataSource ({
    type: "mysql",
    host: "localhost",
    username: "root",
    password: undefined,
    port: 3306,
    database: "demo",
    synchronize: true,
    entities : ["src/Entity/*.ts"],
    insecureAuth : true
})

