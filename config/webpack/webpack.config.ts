import webpackClientConfig from './webpack.client.config';
import webpackServerConfig from './webpack.server.config';

export default [webpackClientConfig, webpackServerConfig];

// SSR

// (ok) 1. move all configs into one place (/config folder)
// (ok) 2. start express server which should serve our static client side
// (ok) 3. successfully manually run server script
// automatically run server script (dev.js) (in template manual script should be defined and server script also need to be defined)
// hydrate on client

// HMR
