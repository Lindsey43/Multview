'use strict';
 	//$scope.value = 'Hello World!'
        toDo.controller('List3Ctrl', function($scope) {
//            $scope.title = "ToDo List";        
        
            $scope.Jobs = ['Job 1','Job 2','Job 3'];
            
                $scope.addJobs = function() {
                    $scope.Jobs.push($scope.NewJob);
                    $scope.NewJob = "";
                }

                $scope.removeJobs = function(index) {
                    $scope.Jobs.splice(index, 1);
                };
            $scope.removeDefault = function(index) {
                    $scope.defaults.splice(index, 1);
                };
            
        });