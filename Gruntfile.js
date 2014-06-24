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
    open: {
      server: {
        url: 'http://localhost:<%= express.options.port %>'
      }
    }
  });

  grunt.registerTask('server', ['express:dev', 'open', 'watch']);
  grunt.registerTask('default', ['server']);

  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-open');
};
