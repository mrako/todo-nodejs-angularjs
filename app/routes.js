'use strict';

var Todo = require('./models/todo');

module.exports = function(app) {

  // GET ALL ====================================================================
  app.get('/api/todos', function(req, res) {
    Todo.find(function(err, todos) {
      if (err) {
        res.send(err);
      }

      res.json(todos);
    });
  });

  // FIND BY ID =================================================================
  app.get('/api/todos/:todoId', function(req, res) {
    Todo.findById(req.params.todoId ,function(err, todo) {
      if (err) {
        res.send(err);
      }

      res.json(todo);
    });
  });

  // CREATE =====================================================================
  app.post('/api/todos', function(req, res) {
    Todo.create({
      text   : req.body.text,
      done   : false
    }, function(err) {
      if (err) {
        res.send(err);
      }

      Todo.find(function(err, todos) {
        if (err) {
          res.send(err);
        }

        res.json(todos);
      });
    });

  });

  // UPDATE =====================================================================
  app.put('/api/todos/:todoId', function(req, res) {
    Todo.update({
      _id: req.params.todoId
    },{
      text   : req.body.text,
      done   : req.body.done
    }, function(err) {
      if (err) {
        res.send(err);
      }

      Todo.find(function(err, todos) {
        if (err) {
          res.send(err);
        }

        res.json(todos);
      });
    });
  });

  // DELETE =====================================================================
  app.delete('/api/todos/:todoId', function(req, res) {
    Todo.remove({
      _id : req.params.todoId
    }, function(err) {
      if (err) {
        res.send(err);
      }

      Todo.find(function(err, todos) {
        if (err) {
          res.send(err);
        }

        res.json(todos);
      });
    });
  });



  // APPLICATION ================================================================
  app.get('*', function(req, res) {
    res.sendfile('./public/index.html');
  });
};