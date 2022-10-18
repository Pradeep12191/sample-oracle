import express from 'express';
import compression from 'compression';
import bodyParser from 'body-parser';
import { roleRoutes } from '@routes';

export const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(compression());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
})
app.use(express.static('public'));

app.use(roleRoutes);

export default app;