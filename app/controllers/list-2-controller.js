'use strict';
 	//$scope.value = 'Hello World!'
        toDo.controller('List2Ctrl', function($scope) {
//            $scope.title = "To List";        
        
            $scope.Foods = ['Apples','graphes','yogurt'];
            
                $scope.addFood = function() {
                    $scope.Foods.push($scope.NewFood);
                    $scope.NewFood = "";
                }

                $scope.removeFood = function(index) {
                    $scope.Foods.splice(index, 1);
                };
            $scope.removeDefault = function(index) {
                    $scope.defaults.splice(index, 1);
                };
            
        });