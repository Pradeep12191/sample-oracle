import { Role } from '../models/role';
import OracleDB from 'oracledb';
import { pool } from '../util/database'

export const add = async (req, res) => {
    let connection: OracleDB.Connection;
    try {
        const { name } = req.body;
        const createdRole = await Role.create({ name }, { raw: true })
        // connection = await (await pool).getConnection();
        // connection.execute(`SELECT table_name FROM user_tables where table_name = 'ROLE'`)
        // connection.execute(`SELECT table_name FROM user_tables where table_name = 'ROLE'`)
        console.log(connection)
        // .then(async (connection) => {
        //     console.log(connection.getSodaDatabase());
        //     // const isTableExist = await connection.execute(`SELECT table_name FROM user_tables where table_name = 'ROLE'`);
        //     let result;
        //     // await connection.execute(`CREATE TABLE role(
        //     //     id NUMBER,
        //     //     name VARCHAR2(50)
        //     //     )`);
        //     // result = await connection.execute(`INSERT INTO ROLE (id, name) VALUES(${id}, '${name}')`);
        //     // console.log(result);
        //     // console.log("Number of inserted rows:", result.rowsAffected);
        // }).catch(err => {
        //     console.log(err);
        // });
        res.status(200).send(createdRole);
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: 'network error' })
    } finally {
        if (connection) {
            await connection.close()
        }
    }
}

export const get = async (req, res) => {
    try {
        const roles = await Role.findAll({})
        // await oracledb.getConnection({
        //     user: "HR",
        //     password: "oracle",
        //     connectString: "localhost:1521/xepdb1"
        // }).then(async (connection) => {
        //     const result = await connection.execute(`SELECT * from ROLE`);
        //     console.log(result);
        //     const roles = result.rows;
        //     res.status(200).send(roles);
        // })
        res.status(200).send(roles);
    }
    catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Network error' });
    }
}