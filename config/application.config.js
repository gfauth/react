const env = process.env.APP_ENV || 'development';
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 4000;

const config = {
  development: {
    path: '/',
    baseUrl: `http://${host}:${port}`,
  },
  test: {
    path: '/',
    baseUrl: `http://${host}:${port}`,
  },
  production: {
    path: '/',
    baseUrl: '',
  },
};

module.exports = config[env];
