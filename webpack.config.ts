import webpackClientConfig from './config/webpack/webpack.client.config';
import webpackServerConfig from './config/webpack/webpack.server.config';

export default [webpackClientConfig, webpackServerConfig];

// SSR (ok)

// (ok) 1. move all configs into one place (/config folder)
// (ok) 2. start express server which should serve our static client side
// (ok) 3. successfully manually run server script
// (ok) 4. automatically run server script (dev.js)
// (ok) hydrate on client

// HMR (Fast refresh)
