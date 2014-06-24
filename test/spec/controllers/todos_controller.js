'use strict';

describe('Controller: TodosController', function () {

  var TodosController,
      scope,
      todosService,
      todos = [{_id: 1, text: "todo item", done: false}];

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();

    todosService = {
      list: jasmine.createSpy('list').andReturn({success: function(fn) {fn(todos);}})
    };
    TodosController = $controller('TodosController', {
      $scope: scope,
      todosService: todosService
    });    
  }));

  it('gets todos from the todos service when attached', function () {
    expect(todosService.list).toHaveBeenCalled();
  });

  it('attaches items to scope when promise is resolved', function () {
    expect(scope.todos).toBe(todos);
  });

});
