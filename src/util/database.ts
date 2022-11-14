import OracleDB from "oracledb";
import { config } from '../config'
import oracleSequlize from 'sequelize-oracle'
import seq from "sequelize";


console.log('Connecting to Oracle DB', config.connectString)

const OracleSequel = oracleSequlize



export const pool: seq.Sequelize = new OracleSequel(config.database, config.user, config.password, {
    dialect: 'oracle'
})

// OracleDB.createPool({
//     user: config.user,
//     password: config.password,
//     connectString: config.connectString
// })