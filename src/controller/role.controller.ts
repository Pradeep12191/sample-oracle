import oracledb from 'oracledb';

export const add = async (req, res) => {
    try {
        const { id, name } = req.body;
        oracledb.autoCommit = true;
        await oracledb.getConnection({
            user: "HR",
            password: "oracle",
            connectString: "localhost:1521/xepdb1"
        }).then(async (connection) => {
            console.log(connection);
            // const isTableExist = await connection.execute(`SELECT table_name FROM user_tables where table_name = 'ROLE'`);
            let result;
            await connection.execute(`CREATE TABLE role(
                id NUMBER,
                name VARCHAR2(50)
                )`);
            result = await connection.execute(`INSERT INTO ROLE (id, name) VALUES(${id}, '${name}')`);
            console.log(result);
            console.log("Number of inserted rows:", result.rowsAffected);
        }).catch(err => {
            console.log(err);
        });
        res.status(200).send({ message: 'success' });
    } catch (error) {
        console.log(error)
        res.status(500).send({ message: 'network error' })
    }
}

export const get = async (req, res) => {
    try {
        await oracledb.getConnection({
            user: "HR",
            password: "oracle",
            connectString: "localhost:1521/xepdb1"
        }).then(async (connection) => {
            const result = await connection.execute(`SELECT * from ROLE`);
            console.log(result);
            const roles = result.rows;
            res.status(200).send(roles);
        })
    }
    catch (error) {
        console.log(error);
        res.status(500).send({ message: 'Network error' });
    }
}