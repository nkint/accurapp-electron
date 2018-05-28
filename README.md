# Mega Viz

## ELECTRON
Adapetd to work with Electron from this gist:
https://gist.github.com/matthewjberger/6f42452cb1a2253667942d333ff53404

## NOTES:
- Add inspector to prod (see [here](https://github.com/sindresorhus/electron-debug) and [here](https://discuss.atom.io/t/how-to-make-developer-tools-appear/16232/6))
- Aay attention to `*.js` paths in index.html because Accurapp add a heading `/`
- Pay attention to `"files": ["**/*"]` in `package.json`, see [electron-builder configuration](https://github.com/electron-userland/electron-builder/blob/master/docs/configuration/configuration.md)
- Use foreman installed globally `npm i -g foreman` to `Procfile` in development

This project was bootstrapped with [AccurApp](https://github.com/accurat/accurapp).

## Usage
Once you installed the dependencies running `yarn`, these are the available commands:
- `yarn start` starts a server locally
- `yarn build` builds the project for production, ready to be deployed from the `build/` folder

[Read the rest of the documentation here.](https://github.com/accurat/accurapp)

## VERSIONS:

- accurapp-scripts: ^4.0.0-beta.2
- electron: ^2.0.2
- electron-builder: ^20.15.1
- webpack-preset-accurapp: ^4.0.0-beta.2
- node: 9.5.0
- yearn: 1.3.2
