import webpack from 'webpack';
import path from 'path';
import nodeExternals from 'webpack-node-externals';
import ReactRefreshTypeScript from 'react-refresh-typescript';
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';

enum EBuildMode {
    Production = 'production',
    Development = 'development',
}

const BUILD_MODE = process.env.MODE as EBuildMode;
const IS_DEV = BUILD_MODE === EBuildMode.Development;

const config: webpack.Configuration = {
    target: 'node',
    externals: nodeExternals(),
    mode: BUILD_MODE,
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    entry: path.resolve(process.cwd(), 'src/server/index.tsx'),
    output: {
        filename: 'bundle.js',
        path: path.resolve(process.cwd(), 'build/server'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        // options: {
                        //     configFile: path.resolve(process.cwd(), 'tsconfig.webpack.json'),
                        // },
                        options: {
                            configFile: path.resolve(process.cwd(), 'tsconfig.webpack.json'),
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ['css-loader'],
            },
        ],
    },
    plugins: [
        IS_DEV && new ReactRefreshWebpackPlugin(),
        IS_DEV && new webpack.HotModuleReplacementPlugin(),
    ].filter(Boolean),
};

export default config;
