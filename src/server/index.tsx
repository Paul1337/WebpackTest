import React from 'react';
import { renderToString } from 'react-dom/server';
import express from 'express';
import path from 'path';

import App from '../shared/App';
import { generateHtmlTemplate } from './htmlTmplateGenerator';

const app = express();

const DEFAULT_PORT = 3000;
const PORT = process.env.PORT ?? DEFAULT_PORT;

app.use('/static', express.static(path.resolve(__dirname, '../client')));
app.get('/', (req: express.Request, res: express.Response) => {
    res.contentType('text/html');
    res.status(200).send(generateHtmlTemplate(renderToString(<App />)));
});

const onServerStarted = () => {
    console.log(`Server is listening on PORT ${PORT}`);
};
app.listen(PORT, onServerStarted);
