angular.module('TodoController', [])
    .controller('todoController', function($scope, $http, Todo) {
        $scope.formData = {};
        $scope.submit = "Create";
        $scope.loading = true;

        // GET =====================================================================
        Todo.list()
            .success(function(data) {
                $scope.todos = data;
                $scope.loading = false;
            });

        // CREATE AND SAVE =========================================================
        $scope.save = function() {
            $scope.loading = true;

            if ($scope.formData._id == undefined) {
                Todo.create($scope.formData)
                    .success(function(data) {
                        $scope.todos = data;
                    });
            } else {
                Todo.update($scope.formData._id, $scope.formData)
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
            Todo.get(id)
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

            Todo.update(todo._id, {done: todo.done, text: data})
                .success(function(data) {
                    $scope.todos = data;
                });
        };

        // DELETE ==================================================================
        $scope.delete = function(id) {
            $scope.loading = true;

            Todo.delete(id)
                .success(function(data) {
                    $scope.loading = false;
                    $scope.todos = data;
                });
        };
    });
