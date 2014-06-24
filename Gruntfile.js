'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    express: {
      options: {
        background: true,
        port: process.env.PORT || 9000
      },
      dev: {
        options: {
          script: './server.js'
        }
      }
    },
    watch: {
      express: {
        files:  [ 'app/**/*.js' ],
        tasks:  [ 'express:dev' ],
        options: {
          spawn: false
        }
      }
    },
    open: {
      server: {
        url: 'http://localhost:<%= express.options.port %>'
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'app/**/*.js',
        'public/js/**/*.js'
      ]
    },
    karma: {
      unit: {
        configFile: './test/karma.conf.js'
      }
    }
  });

  grunt.registerTask('server', ['express:dev', 'open', 'watch']);
  grunt.registerTask('default', ['jshint', 'karma']);

  grunt.registerTask('test:unit', ['karma:unit']);
  grunt.registerTask('test:e2e', ['karma:e2e']);

  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-open');

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-karma');
};
