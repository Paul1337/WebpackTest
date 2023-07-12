import webpack from 'webpack';
import path from 'path';

enum EBuildMode {
    Production = 'production',
    Development = 'development',
}

const BUILD_MODE = process.env.MODE as EBuildMode;

const config: webpack.Configuration = {
    mode: BUILD_MODE,
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    entry: path.resolve(process.cwd(), 'src/client/index.tsx'),
    output: {
        filename: BUILD_MODE === EBuildMode.Production ? 'bundle.[contenthash].js' : 'bundle.js',
        path: path.resolve(process.cwd(), 'build/client'),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            configFile: path.resolve(process.cwd(), 'tsconfig.webpack.json'),
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};

export default config;
