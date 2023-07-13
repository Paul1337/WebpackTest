import webpack from 'webpack';
import express from 'express';

import webpackConfigurations from '../../webpack.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import express from 'express';

const [clientConfig, serverConfig] = webpackConfigurations;

console.log('Server config:', clientConfig);

const clientCompiler = webpack(clientConfig);
const serverCompiler = webpack(serverConfig);

console.log('Running dev compilation..');

clientCompiler.run((err) => {
    if (err) return console.error('Client compiler error:', err);
    console.log('Client compilation successful');
});

serverCompiler.run((err) => {
    if (err) return console.error('Server compiler error:', err);
    console.log('Server compilation successful');
});
