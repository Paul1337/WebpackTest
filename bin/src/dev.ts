import webpack from 'webpack';
import nodemon from 'nodemon';
import path from 'path';
import webpackConfigurations from '../../webpack.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import express from 'express';

const FAST_REFRESH_SERVER_PORT = 3001;

const [clientConfig, serverConfig] = webpackConfigurations;

const clientCompiler = webpack(clientConfig);

const fastRefreshServer = express();
fastRefreshServer.use(
    webpackDevMiddleware(clientCompiler, {
        publicPath: clientConfig.output?.publicPath,
        serverSideRender: true,
        // watchOptions: {
        //     ignore: /build/,
        // },
        writeToDisk: true,
        stats: 'errors-only',
    })
);
fastRefreshServer.use(
    webpackHotMiddleware(clientCompiler, {
        path: '/static/__webpack_hmr',
    })
);

fastRefreshServer.listen(FAST_REFRESH_SERVER_PORT, () => {
    console.log('Fast-refresh server successfully started');
});

console.log('Running dev compilation..');

const serverCompiler = webpack(serverConfig);
serverCompiler.run((err) => {
    if (err) return console.error('Server compiler error:', err);

    serverCompiler.watch({}, (err) => {
        if (err) return console.error('Client compilation failed:', err);
        console.log('Server compilation succeeded');
    });

    nodemon({
        script: path.resolve(process.cwd(), 'build/server/bundle.js'),
        watch: [path.resolve(process.cwd(), 'build/server')],
    });
});
