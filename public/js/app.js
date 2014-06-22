var todoApp = angular.module('todoApp', ["xeditable"]);

todoApp.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});
 
// ROUTES ======================================================================
todoApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/todos', {
        templateUrl: 'templates/todos.html',
        controller: 'todosController'
      }).
    otherwise({
      redirectTo: '/todos'
    });;
}]);


// SERVICE FOR API CALLS =======================================================
todoApp.factory('Todos', function ($http) {
    return {
        list : function() {
            return $http.get('/api/todos');
        },
        get : function(id) {
            return $http.get('/api/todos/' + id);
        },
        create : function(data) {
            return $http.post('/api/todos', data);
        },
        update : function(id, data) {
            return $http.put('/api/todos/' + id, data);
        },
        delete : function(id) {
            return $http.delete('/api/todos/' + id);
        }
    }
});

todoApp.controller('todosController', function($scope, $http, Todos) {
    $scope.formData = {};
    $scope.submit = "Create";
    $scope.loading = true;

    // GET =====================================================================
    Todos.list()
        .success(function(data) {
            $scope.todos = data;
            $scope.loading = false;
        });

    // CREATE AND SAVE =========================================================
    $scope.save = function() {
        $scope.loading = true;

        if ($scope.formData._id == undefined) {
            Todos.create($scope.formData)
                .success(function(data) {
                    $scope.todos = data;
                });
        } else {
            Todos.update($scope.formData._id, $scope.formData)
                .success(function(data) {
                    $scope.todos = data;
                });
        }

        $scope.loading = false;
        $scope.formData = {};
        $scope.submit = "Create";
    };

    // CREATE ==================================================================
    $scope.edit = function (id) {
        Todos.get(id)
            .success(function(data) {
                $scope.formData = data;
                $scope.submit = "Save";
                $scope.loading = false;
            });
    };

    // UPDATE ==================================================================
    $scope.update = function(todo) {
        $scope.updateData(todo, todo.text)
    };

    $scope.updateData = function(todo, data) {
        $scope.loading = true;

        Todos.update(todo._id, {done: todo.done, text: data})
            .success(function(data) {
                $scope.todos = data;
            });
    };

    // DELETE ==================================================================
    $scope.delete = function(id) {
        $scope.loading = true;

        Todos.delete(id)
            .success(function(data) {
                $scope.loading = false;
                $scope.todos = data;
            });
    };
});
