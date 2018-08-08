/// <reference path="../node_modules/@types/webpack-env/index.d.ts" />

let context = require.context('./');
console.log(context.keys().join(','));
