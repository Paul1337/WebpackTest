import webpack from 'webpack';
import webpackConfigurations from '../../config/webpack/webpack.config';

const [clientConfig, serverConfig] = webpackConfigurations;

const clientCompiler = webpack(clientConfig);
const serverCompiler = webpack(clientConfig);

console.log('Running dev compilation..');

clientCompiler.run((err) => {
    if (err) return console.error('Client compiler error:', err);
    console.log('Client compilation successful');
});

serverCompiler.run((err) => {
    if (err) return console.error('Server compiler error:', err);
    console.log('Server compilation successful');
});
