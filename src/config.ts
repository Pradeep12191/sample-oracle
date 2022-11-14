import { env } from './env';

const config_all = {
    prod: {
        connectString: 'pradeep@//localhost:1521/xepdb1',
        password: 'dominate007',
        database: 'xepdb1',
        user: "pradeep",
    },
    dev: {
        connectString: 'localhost:1521/xepdb1',
        database: 'xe',
        password: 'password',
        user: "C##pradeep",
    }
}

export const config = config_all[env]