import { env } from './env';

const config_all = {
    prod: {
        reportUrl: 'http://192.168.43.43:4200/#/',
        port: 3000
    },
    dev: {
        reportUrl: 'http://localhost:4200/#/',
        port: 3000
    }
}

export const config = config_all[env]