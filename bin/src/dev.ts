import webpack from 'webpack';
import nodemon from 'nodemon';
import path from 'path';
import webpackConfigurations from '../../webpack.config';

const compiler = webpack(webpackConfigurations);

console.log('Running dev compilation..');

compiler.run((err) => {
    if (err) return console.error('Compiler error:', err);

    compiler.watch({}, (err) => {
        if (err) return console.error('Client compilation failed:', err);
        console.log('Compilation succeeded');
    });

    nodemon({
        script: path.resolve(process.cwd(), 'build/server/bundle.js'),
        watch: [path.resolve(process.cwd(), 'build/server')],
    });
});
