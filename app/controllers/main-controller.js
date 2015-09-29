'use strict';
 	//$scope.value = 'Hello World!'
        toDo.controller('todoController', function($scope, $localStorage) {
//            $scope.title = "ToDo List";        
            if ($localStorage.ToDos){
                $scope.ToDos = $localStorage.ToDos;
            }else{
                $scope.ToDos = ['cut lawn','Finish Homework','Laundry'];
            }
                $scope.addTodo = function() {
                    $scope.ToDos.push($scope.NewTodo);
                    $localStorage.ToDos = $scope.ToDos;
                    $scope.NewTodo = "";
                }

                $scope.removeTodo = function(index) {
                    $scope.ToDos.splice(index, 1);
                    $localStorage.ToDos = $scope.ToDos;
                };
            
            $scope.removeDefault = function(index) {
                    $scope.defaults.splice(index, 1);
                };
            
        });