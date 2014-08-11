'use strict';
var yeoman = require('yeoman-generator');

var Generator = yeoman.generators.Base.extend({
  compose: function() {
    this.composeWith('moca-component:service', {arguments: this.arguments}, { local: require.resolve('generator-moca-component/service') });
  }
});

module.exports = Generator;