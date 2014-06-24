'use strict';

// SERVICE FOR API CALLS =======================================================
angular.module('TodoFactory', [])
    .factory('Todo', function ($http) {
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
        };
    });
