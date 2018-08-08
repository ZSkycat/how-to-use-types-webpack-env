# how-to-use-types-webpack-env
**How to use @types/webpack-env** is an example of using `@types/webpack-env`. Make it and `@types/node` coexist in the same working directory.

## What is it
`@types/webpack-env` provides a type definition for the [webpack Module API](https://webpack.js.org/api/module-methods/) and [Node.js module](https://webpack.js.org/configuration/node/).
`@types/webpack-env` and `@types/node` are mutually exclusive because they represent different environments.

## How to use
You can clone this repository and test it.
```
npm run frontend
npm run backend
npm run inline
```

### Configuration Mode
The sample file is in the following directory.
```
\backend\
\frontend\
```

Use two tsconfig.json files separately, and configure the type definitions to include.
```
webpack environment
{
    "compilerOptions": {
        "types": ["webpack-env"],
    }
}

node environment
{
    "compilerOptions": {
        "types": ["node"],
    }
}
```

### Inline Mode
The sample file is in the following directory.
```
\inline\
```

Edit `tsconfig.json` to exclude type definitions. (`webpack-env` and `node`)
```
{
    "compilerOptions": {
        "types": [],
    }
}
```

Use The [Triple-Slash Directives](https://www.typescriptlang.org/docs/handbook/triple-slash-directives.html) to import type definitions.
```
webpack environment
/// <reference path="../node_modules/@types/node/index.d.ts" />

node environment
/// <reference path="../node_modules/@types/webpack-env/index.d.ts" />
```

## Related Issues
https://github.com/DefinitelyTyped/DefinitelyTyped/issues/11324

## License
```
       DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
               Version 2, December 2004

Copyright (C) ZSkycat

Everyone is permitted to copy and distribute verbatim or modified
copies of this license document, and changing it is allowed as long
as the name is changed.

           DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
  TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

  0. You just DO WHAT THE FUCK YOU WANT TO.
```
