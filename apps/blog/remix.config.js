const { createRoutesFromFolders } = require('@remix-run/v1-route-convention');

/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  appDirectory: 'app',
  publicPath: '/build/',
  future: {
    v2_meta: true,
    v2_errorBoundary: true,
    v2_routeConvention: true,
    v2_normalizeFormMethod: true,
    unstable_tailwind: true,
    unstable_postcss: true,
  },
  serverDependenciesToBundle: process.env.NODE_ENV === "development" ? ['@vercel/og'] : [],
  // Tell Remix to ignore everything in the routes directory.
  // We'll let `createRoutesFromFolders` take care of that.
  ignoredRouteFiles: ["**/*"],
  // `createRoutesFromFolders` will create routes for all files in the
  // routes directory using the same default conventions as Remix v1.
  routes: defineRoutes => {
    // uses the v1 convention, works in v1.15+ and v2
    return createRoutesFromFolders(defineRoutes);
  },
};
