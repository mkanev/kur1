var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'kur2'
    },
    port: 3000,
    db: 'mongodb://localhost/kur2-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'kur2'
    },
    port: 3000,
    db: 'mongodb://localhost/kur2-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'kur2'
    },
    port: 3000,
    db: 'mongodb://localhost/kur2-production'
  }
};

module.exports = config[env];
