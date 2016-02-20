angular.module('starter.controllers', [])
    .controller("nombrecontrolador", ['$scope', //el scope siempre es obligatorio, siempre recuerda la coma y el bracket bruto
        function ($scope) {
            $scope.color = '#FF00FF'; //la magia es grande caballero
            $scope.funcion = function () {
                $scope.color = " -- ";
                console.log("t");
            };

        }
    ])