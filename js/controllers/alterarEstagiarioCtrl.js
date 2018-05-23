angular.module("apiEstagiarios").controller("alterarEstagiarioCtrl", function ($scope, estagiariosAPI, estagiario, $location){

    $scope.title = "Alterar estagiário";
    $scope.estagiario = estagiario.data;   
    
    $scope.atualizarEstagiario = function (estagiario){
        estagiariosAPI.updateEstagiario(estagiario).then(function (data){
         
            delete $scope.estagiario;
            $scope.estagiarioForm.$setPristine();
            $location.path("/estagiarios");

        });
    };

    
});