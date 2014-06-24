module.exports = function(config) {
  config.set({
    basePath: '../',

    frameworks: ['jasmine'],

    files: [
      'public/components/angular/angular.js',
      'public/components/angular-route/angular-route.js',
      'public/components/angular-xeditable/dist/js/xeditable.js',
      'public/components/angular-route/angular-route.js',
      'public/components/angular-mocks/angular-mocks.js',
      'public/js/app.js',
      'public/js/services/todos_service.js',
      'public/js/controllers/todos_controller.js',
      'test/spec/**/*.js'
    ],

    exclude: [],

    port: 9999,

    reporters : ['spec'],

    autoWatch: false,

    browsers: ['PhantomJS'],

    singleRun: true
  });
};
