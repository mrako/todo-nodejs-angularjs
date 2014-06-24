var todoApp = angular.module('todoApp', ['TodoController', 'TodoFactory', 'xeditable']);

todoApp.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});
 
// ROUTES ======================================================================
todoApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/todos', {
        templateUrl: 'templates/todos.html'
      }).
    otherwise({
      redirectTo: '/todos'
    });
}]);
