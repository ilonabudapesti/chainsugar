(function(){

  //load module
  angular.module('trApp')
    .factory('TaskService', ['$http', TaskService]);

  function TaskService($http){
    return {

      addTask: function(form) {
        return $http({
          method: 'POST',
          url: '/api/tasks',
          data: form
        }).success(function(task){
          return task;
        }).error(function(err){
          console.log(err);
        });
      },

      retrieveAllTasks: function(searchQuery) {
      // returns an array of tasks async
        return $http({
          method: 'GET',
          url: '/api/tasks',
        }).success(function(tasks){
          return tasks;
        }).error(function(err){
          console.log(err);
        });
      },

      retrieveUserTasks: function(searchQuery) {
      // returns an array of tasks specific to the user
      // will have property (bool) to tell if the owner
      // owns the task
      },

      updateTask: function(taskId) {
      // changing description of a task
      },

      deleteTask: function(taskId) {
      // remove task from db
      },

      assignTask: function(taskId, userId) {
      },

      applyForTask: function(taskId) {
      },

      setTaskComplete: function(taskId) {
      }


    };
  }

})();
