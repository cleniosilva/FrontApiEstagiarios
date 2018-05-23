angular.module("apiEstagiarios").controller("listaEstagiarioCtrl", function ($scope, estagiarios, estagiariosAPI){
    
    $scope.estagiarios = estagiarios.data;
   

});