# React Base

Create React apps with no build configuration.

### Usage

#### Install the fillet-cli:
```shell
$ git clone git@codebasehq.com:fillet/open-source/fillet-cli.git
$ cd fillet-cli
$ yarn global add .
```

#### Generate Application:

```shell
$ fillet new react APP_NAME
```

### Changes
#### 09-06-2018
- Redux Devtools in development
#### older
- Replaced NodeJS Express Server to Webpack-dev-server
- Changed unit test suite to Jest + Enzyme
- Changed integraton test suite to Protractor
- Created application.config to define public and base path
- Added SASS variables globally
- The JS/CSS`s path is added automatically in HTML


