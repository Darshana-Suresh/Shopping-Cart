'use strict';

/**
 * @ngdoc function
 * @name newappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the newappApp
 */
angular.module('newappApp')
  .controller('MainCtrl', function ($scope) {

            $scope.yourName = "";
            $scope.products=[];
            $scope.productName="";
            $scope.addProduct = function(){
                if($scope.productName!="")
                    {
                        $scope.numSpaces=10-$scope.productName.length;
                        if($scope.products.indexOf($scope.productName)==-1)
                            {
                                 $scope.spaces= '&emsp;';

                                $scope.products.push($scope.productName);
                                while($scope.numSpaces>1)
                                {
                                    $scope.spaces=$scope.spaces+'&emsp;';
                                    $scope.numSpaces--;
                                }
                                $scope.msg="";
                                $scope.listNotEmpty=true;
                            }
                        else
                            $scope.msg="The item is already in the list";
                    }
                else
                    $scope.msg="Please enter the product name";
            }
            $scope.removeProduct = function(i){

                $scope.products.splice(i,1);
                $scope.msg="";
                if($scope.products==[])
                    $scope.listNotEmpty=false;
            }
  });
