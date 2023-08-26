Package.describe({
  name: 'storyteller:ssl',
  version: '0.3.1',
  summary: 'SSL support for Meteor local development',
  documentation: 'README.md',
  git: 'https://github.com/nourharidy/meteor-ssl.git'
})

Package.onUse(function (api) {
  api.addFiles('ssl.js', 'server')
  api.addFiles('helpers.js', 'client')
  api.export('SSL', 'server')
  api.export('isHTTPS', 'client')
  api.export('switchHTTPS', 'client')
})

Npm.depends({ 'http-proxy': '1.18.1' })
